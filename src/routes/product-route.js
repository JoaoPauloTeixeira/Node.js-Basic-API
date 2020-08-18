'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

const create = router.post('/', controller.post);
const put = router.put('/:id', controller.put);
const del = router.delete('/:id', controller.delete);
const get = router.get('/', controller.get);
const getBySlug = router.get('/:slug', controller.getBySlug);
const getById = router.get('/:id', controller.getById);
const getByTag = router.get('/:tags', controller.getByTag);

module.exports = router;