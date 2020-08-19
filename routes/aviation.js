var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var koreaairport_db = require('../db_aviation_koreaairport');
var AirportKorea = require('../models/korea_airports');
var worldairplane_db = require('../models/world_airplane');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    //res.writeHead(200, { "Content-Type": "text/html" }); //웹페이지 출력
    //fs.createReadStream("../app/apidoc/index.html").pipe(res); //index.html를 response함.
    //res.sendfile("./index.html");
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Korea airports Info API

// Create
/**
 * @api {post} /aviation/api/koreaairports/ Create korea's airport information by airport name.
 * @apiName PostKoreaAirport
 * @apiGroup Aviation
 * @apiVersion 0.1.0
 * @apiPermission admin
 * 
 * @apiParam {String} airport_name Name of Korea's airport.
 * @apiParam {String} airport_district District of Korea's airport.
 * @apiParam {Number} latitude latitude of Korea's airport.
 * @apiParam {Number} longitude longitude of Korea's airport.
 
 * @apiParamExample {json} Request-Example:
 *  { 
 *      airport_name: '김포', 
 *      airport_district: '서울특별시 강서구 하늘길 76', 
 *      latitude: 37.558056, 
 *      longitude: 126.790556 
 *  }
 * 
 * @apiSuccessExample Success-Response:
 *  OK
 * 
 * @apiError (500) serverError apiErrorTitle is not needed.
 * 
 */
router.post('/api/koreaairports', (req, res) => {
    AirportKorea.create(req.body)
        .then(airportkoreas => res.set('content-Type', 'application/json').send(airportkoreas))
        .catch(err => res.status(500).send(err));
});

// Read
// R1 - Full Search
/**
 * @api {get} /aviation/api/koreaairports Request Full korea's airports information
 * @apiName GetKoreaAirports
 * @apiGroup Aviation
 * @apiVersion 0.1.0
 * @apiPermission none
 * @apiExample {curl} Example usage:
 *  curl -i http://localhost:4000/aviation/api/koreaairports
 * 
 * @apiParam {String} airportname Name of Korea's airport.
 * 
 * @apiSuccess {String} airport_name Name of Korea's airport.
 * @apiSuccess {String} airport_district District of Korea's airport.
 * @apiSuccess {Number} latitude latitude of Korea's airport.
 * @apiSuccess {Number} longitude longitude of Korea's airport.
 * 
 * @apiSuccessExample Success-Response:
 *  find successfully: 
 *  { 
 *      _id: 5f38038cfb1b000004000744, 
 *      airport_name: '김포', 
 *      airport_district: '서울특별시 강서구 하늘길 76', 
 *      latitude: 37.558056, 
 *      longitude: 126.790556 
 *  },
 *  {
 *      _id: 5f38038cfb1b000004000745, 
 *      airport_name: '김해', 
 *      airport_district: '부산광역시 강서구 공항진입로 108번지', 
 *      latitude: 35.179444, 
 *      longitude: 128.938056 
 *  },
 *  ...
 *  { 
 *      _id: 5f38038cfb1b000004000751, 
 *      airport_name: '원주', 
 *      airport_district: '강원도 횡성군 횡성읍 횡성로 38 ', 
 *      latitude: 37.438056, 
 *      longitude: 127.960278 
 *  }
 * 
 * @apiError KoreaAirportNotFound Korea airports not found
 * 
 * @apiErrorExample Error-Response:
 *  {
 *      "err":"Korea airport not found"
 *  }
 * 
 * 
 */
router.get('/api/koreaairports', (req, res) => {
    AirportKorea.findAll()
        .then((airportkoreas) => {
            if (!airportkoreas.length) return res.status(404).send({ err: 'korea airports not found' });
            res.set('content-Type', 'application/json').send(`find successfully: ${airportkoreas}`);
        })
        .catch(err => res.status(500).send(err));
});

//R2 - Find ONe by airport name
/**
 * @api {get} /aviation/api/koreaairports/:airportname Request korea's airport information by airport name.
 * @apiName GetKoreaAirport
 * @apiGroup Aviation
 * @apiVersion 0.1.0
 * @apiPermission none
 * @apiExample {curl} Example usage:
 *  curl -i http://localhost:4000/aviation/api/koreaairports/울산
 * 
 * @apiParam {String} airportname Name of Korea's airport.
 * 
 * @apiSuccess {String} airport_name Name of Korea's airport.
 * @apiSuccess {String} airport_district District of Korea's airport.
 * @apiSuccess {Number} latitude latitude of Korea's airport.
 * @apiSuccess {Number} longitude longitude of Korea's airport.
 * 
 * @apiSuccessExample Success-Response:
 *  find successfully: 
 *  { 
 *      _id: 5f38038cfb1b000004000748, 
 *      airport_name: '울산', 
 *      airport_district: '울산광역시 북구 산업로 1103', 
 *      latitude: 35.593333, 
 *      longitude: 129.351667 
 *  }
 * 
 * @apiError KoreaAirportNotFound Korea airport not found
 * 
 * @apiErrorExample Error-Response:
 *  {
 *      "err":"Korea airport not found"
 *  }
 * 
 * 
 */
router.get('/api/koreaairports/:airportname', (req, res) => {
    AirportKorea.findOneByAirportname(req.params.airportname)
        .then((airportkoreas) => {
            if (!airportkoreas) return res.status(404).send({ err: 'Korea airport not found' });
            res.set('content-Type', 'application/json').send(`findOne successfully: ${airportkoreas}`);
        })
        .catch(err => res.status(500).send(err));
});

// Update
/**
 * @api {put} /aviation/api/koreaairports/:airportname Update korea's airport information by airport name.
 * @apiName PutKoreaAirport
 * @apiGroup Aviation
 * @apiVersion 0.1.0
 * @apiPermission admin
 * 
 * @apiParam {String} airportname Name of Korea's airport to find data for updating.
 * @apiParam {String} airport_name Name of Korea's airport.
 * @apiParam {String} airport_district District of Korea's airport.
 * @apiParam {Number} latitude latitude of Korea's airport.
 * @apiParam {Number} longitude longitude of Korea's airport.
 * 
 * @apiExample {curl} Example usage:
 *  curl -i http://localhost:4000/aviation/api/koreaairports/울산
 *  
 * @apiParamExample {json} Request-Example:
 *  { 
 *      airport_name: '김포', 
 *      airport_district: '서울특별시 강서구 하늘길 76', 
 *      latitude: 37.558056, 
 *      longitude: 126.790556 
 *  }
 * 
 * @apiSuccessExample Success-Response:
 *  OK
 * 
 * @apiError (500) serverError apiErrorTitle is not needed.
 * 
 * 
 */
router.put('/api/koreaairports/:airportname', (req, res) => {
    AirportKorea.updateByTodoid(req.params.airportname, req.body)
        .then(airportkoreas => res.set('content-Type', 'application/json').send(airportkoreas))
        .catch(err => res.status(500).send(err));
});

// Delete
/**
 * @api {delete} /aviation/api/koreaairports/:airportname airportname Delete korea's airport information by airport name.
 * @apiName deleteKoreaAirport
 * @apiGroup Aviation
 * @apiVersion 0.1.0
 * @apiPermission admin
 * 
 * @apiParam {String} Name of Korea's airport to find data for delete.
 * 
 * @apiExample {curl} Example usage:
 *  curl -i http://localhost:4000/aviation/api/koreaairports/울산
 *  
 * 
 * @apiSuccessExample Success-Response:
 *  OK
 * 
 * @apiError (500) serverError apiErrorTitle is not needed.
 * 
 */
router.delete('/api/koreaairports/:airportname', (req, res) => {
    AirportKorea.deleteByTodoid(req.params.airportname)
        .then(() => res.set('content-Type', 'application/json').sendStatus(200))
        .catch(err => res.status(500).send(err));
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// World Airplane Info API

// Create
// - No Providing
router.post('/api/worldairplane', (req, res) => {
    err => res.status(500).send(err);
});

// Read
router.get('/api/worldairplane', worldairplane_db.findAllAirplaneInfos);

router.get('/api/worldairplane/maker/:maker', worldairplane_db.findAirplaneInfobyMaker);

router.get('/api/worldairplane/icao/:icao', worldairplane_db.findAirplaneInfobyicao);

// Update
// - No Providing
router.put('/api/worldairplane', (req, res) => {
    err => res.status(500).send(err);
});

// Delete
// - No Providing
router.delete('/api/worldairplane', (req, res) => {
    err => res.status(500).send(err);
});

module.exports = router;