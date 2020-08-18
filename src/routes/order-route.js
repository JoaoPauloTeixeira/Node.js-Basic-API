'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');

const create = router.post('/', controller.post);

module.exports = router;