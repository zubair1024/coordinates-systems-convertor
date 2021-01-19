const codes = require("@esri/proj-codes");
const proj4 = require("proj4");

//use https://epsg.io/ for getting the look up code

const FROM_CRS = codes.lookup(4326);
const TO_CRS = codes.lookup(3997);

const lat = 25;
const long = 55;

const result = proj4(FROM_CRS.wkt, TO_CRS.wkt, [long, lat]);

console.log(result);
