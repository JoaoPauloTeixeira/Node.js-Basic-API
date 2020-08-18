'use strict';

const mongoose = require('mongoose');
const schemaMongoose = mongoose.Schema;

const schema = new schemaMongoose({
    number: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        require: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    items: [{
        quantity: {
            type: Number,
            required: true,
            defaulu: 1
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer'
        },
    }]
});

module.exports = mongoose.model('Order', schema);