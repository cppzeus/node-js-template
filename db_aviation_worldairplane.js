// ENV
require('dotenv').config();

// DEPENDENCIES
var Pool = require('pg').Pool;
var pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.POSTGRESQL_DB_HOST,
    database: process.env.COL_AVIATION,
    password: process.env.DB_PASS,
    port: process.env.POSTGRESQL_DB_PORT,
});

module.exports = pool;