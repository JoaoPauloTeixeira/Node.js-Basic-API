'use strict';

const mongoose = require('mongoose');
const customer = mongoose.model('Customer');

exports.create = async(data) => {
    var customer = new Product(data);
    await customer.save();
}