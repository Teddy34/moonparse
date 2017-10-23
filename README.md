# moonparse
Eve online clipboard parser

Quick tool deployed at https://moonparse.herokuapp.com/

Support POST only, with a "paste" parameter as json body (Content-Type: application/json) or x-www-form-urlencoded (Content-Type: application/x-www-form-urlencoded).

Please remember that \t and \n the separator in the input data.

example:
```{"paste":"Moon\tMoon Product\tQuantity\tOre TypeID\tSolarSystemID\tPlanetID\tMoonID\n6-CZ49 V - Moon 19\n\tLoparite\t0.48\t45512\t30003280\t40208095\t40208115\n\tPlatinoid Omber\t0.22\t46684\t30003280\t40208095\t40208115\n\tResplendant Kernite\t0.3\t46683\t30003280\t40208095\t40208115"}```

returns:
```[
    {
        "moon": "6-CZ49 V - Moon 19",
        "data": [
            {
                "moonProduct": "Loparite",
                "quantity": "0.48",
                "ore": "45512",
                "typeID": "30003280",
                "solarSystemID": "40208095",
                "planetID": "40208115"
            },
            {
                "moonProduct": "Platinoid Omber",
                "quantity": "0.22",
                "ore": "46684",
                "typeID": "30003280",
                "solarSystemID": "40208095",
                "planetID": "40208115"
            },
            {
                "moonProduct": "Resplendant Kernite",
                "quantity": "0.3",
                "ore": "46683",
                "typeID": "30003280",
                "solarSystemID": "40208095",
                "planetID": "40208115"
            }
        ]
    }
]```
