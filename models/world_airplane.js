// DEPENDENCIES
var pool = require('../db_aviation_worldairplane');
const { log } = require('debug');

// Create
// - No providing.

// Find All
var findAllAirplaneInfos = function(req, res) {
    pool.query('SELECT * FROM info_airplane ORDER BY maker ASC', (err, results) => {
        if (err) throw err;
        res.status(200).set('content-Type', 'application/json').json(results.rows);
    });
};

// Find data by airplane maker
var findAirplaneInfobyMaker = function(req, res) {
    var maker = req.params.maker;
    maker = '\%' + maker.toUpperCase() + '\%';
    console.log(maker);
    pool.query('SELECT * FROM info_airplane WHERE maker like $1', [maker], (err, results) => {
        if (err) {
            throw err;
        }

        res.status(200).set('content-Type', 'application/json').json(results.rows);
    });
};

// Find Data by icao
var findAirplaneInfobyicao = function(req, res) {
    var icao = req.params.icao;
    icao = '\%' + icao.toUpperCase() + '\%';
    console.log(icao);
    pool.query('SELECT * FROM info_airplane WHERE icao like $1', [icao], (err, results) => {
        if (err) throw err;
        res.status(200).set('content-Type', 'application/json').json(results.rows);
    });
};

// Update by airplane name
// - No providing.

// Delete by airplane name.
// - No providing

module.exports = { findAllAirplaneInfos, findAirplaneInfobyMaker, findAirplaneInfobyicao };