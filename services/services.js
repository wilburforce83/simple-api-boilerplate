// data aquisition functions for adding and manipulating data in db.json

require('dotenv').config();
const JSONdb = require("simple-json-db");
// Example data (could be replaced with a database)
const db = new JSONdb("./db/db.json");
const dbhelper = require("../db/helpers");

const services = () => {

    //trigger your data aquisition events here and save them to the /db/db.json file with simple-json-db
    

}


module.exports = services;