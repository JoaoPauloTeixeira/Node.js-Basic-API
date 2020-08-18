'use strict';

const mongoose = require('mongoose');
const schemaMongoose = mongoose.Schema;

const schema = new schemaMongoose({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Customer', schema);