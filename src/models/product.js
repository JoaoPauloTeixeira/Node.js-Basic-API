'use strict';

const mongoose = require('mongoose');
const schemaMongoose = mongoose.Schema;

const schema = new schemaMongoose({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    activate: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true,
    }]
});

module.exports = mongoose.model('Product', schema);