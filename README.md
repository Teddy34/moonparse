# moonparse
Eve online clipboard parser

Quick tool deployed at https://moonparse.herokuapp.com/

Support POST only, with a "paste" parameter as json body (Content-Type: application/json) or x-www-form-urlencoded (Content-Type: application/x-www-form-urlencoded).

example:
{"paste":"Moon\tMoon Product\tQuantity\tOre TypeID\tSolarSystemID\tPlanetID\tMoonID\n6-CZ49 V - Moon 19\n\tLoparite\t0.48\t45512\t30003280\t40208095\t40208115\n\tPlatinoid Omber\t0.22\t46684\t30003280\t40208095\t40208115\n\tResplendant Kernite\t0.3\t46683\t30003280\t40208095\t40208115"}
