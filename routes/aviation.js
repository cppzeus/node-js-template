var express = require('express');
var router = express.Router();
var db = require('../db_aviation');
var AirportKorea = require('../models/korea_airports');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// Create
router.post('/api/koreaairports', (req, res) => {
    AirportKorea.create(req.body)
        .then(airportkoreas => res.send(airportkoreas))
        .catch(err => res.status(500).send(err));
});

// Read
// R1 - Full Search
router.get('/api/koreaairports', (req, res) => {
    AirportKorea.findAll()
        .then((airportkoreas) => {
            if (!airportkoreas.length) return res.status(404).send({ err: 'koreaairports not found' });
            res.send(`find successfully: ${airportkoreas}`);
        })
        .catch(err => res.status(500).send(err));
});
//R2 - Find ONe by airport name
router.get('/api/koreaairports/:airportname', (req, res) => {
    AirportKorea.findOneByAirportname(req.params.airportname)
        .then((airportkoreas) => {
            if (!airportkoreas) return res.status(404).send({ err: 'Korea airport not found' });
            res.send(`findOne successfully: ${airportkoreas}`);
        })
        .catch(err => res.status(500).send(err));
});

// Update
router.put('/api/koreaairports/:airportname', (req, res) => {
    AirportKorea.updateByTodoid(req.params.airportname, req.body)
        .then(airportkoreas => res.send(airportkoreas))
        .catch(err => res.status(500).send(err));
});

// Delete
router.delete('/api/koreaairports/:airportname', (req, res) => {
    AirportKorea.deleteByTodoid(req.params.airportname)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
});

module.exports = router;