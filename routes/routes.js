const express = require('express');
const jwt = require("jsonwebtoken");
const router= express.Router();

const {login}= require('../controllers/validate');

router.post('/login', login);


const {service}= require('../controllers/services');
router.get('/service', service);

const {search_by_saloon}= require('../controllers/search_by_saloon');
router.get('/search_by_saloon', search_by_saloon);


const {booking}= require('../controllers/booking');
router.post('/booking', booking);

const {men_services}= require('../controllers/men_services');
router.get('/men_services', men_services);

const {women_service}= require('../controllers/women_service');
router.get('/women_service', women_service);

const {kid_services}= require('../controllers/kid_services');
router.get('/kid_services', kid_services);

const {massage}= require('../controllers/massage');
router.get('/massage', massage);


   

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { login } = require('../controllers/validate');
// const { service } = require('../controllers/services');
// const { booking } = require('../controllers/booking');

// // Define routes
// router.get('/login', login);
// router.get('/service', service);
// router.post('/booking', booking);

// module.exports = router;