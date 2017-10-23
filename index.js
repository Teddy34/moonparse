const express = require('express');
const {flow, head, last, split, tail} = require('lodash/fp');
const cors = require('cors');

const bodyParser = require('body-parser')

const parse = queryData => {
    // get rid of tabs as separators
    const reformatedQuery = queryData.replace(/\t/g, ',');

    // line parser
    const parseLine = split('\n');
    const parsedByLine = parseLine(reformatedQuery);

    // split headers and data, format data
    const separateHeaders = ([headers, ...data]) => ({headers: headers.split(','), data});
    const {data} = separateHeaders(parsedByLine)

    // mineral parser
    const parseMineral = flow(split(','), tail);
    const formatMineral = ([moonProduct, quantity, ore, typeID, solarSystemID, planetID, moonID]) =>({moonProduct, quantity, ore, typeID, solarSystemID, planetID, moonID});
    const parseFormatMineral = flow(parseMineral, formatMineral);

    const aggregateByMoon = (memo, value) => {
        (/^,/.exec(value))?
            (last(memo).push(parseFormatMineral(value))):
            (memo.push([value]));
            return memo;
        };
    const aggregated = data.reduce(aggregateByMoon, []);
   
    const convertToObject = ([moon, ...data]) => ({moon, data});
    return aggregated.map(convertToObject);
};

const app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(cors());

app.post('/', (req,res) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(parse(req.body.paste)));
});

app.listen(process.env.PORT || 8081);
