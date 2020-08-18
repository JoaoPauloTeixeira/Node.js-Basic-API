'use strict';

const mongoose = require('mongoose');
const order = mongoose.model('Order');

exports.create = async(data) => {
    var res = new Order(data);
    await order.save();
}

exports.get = async(data) => {
    var res  = await Order.find({

    }).populate('customer');
    return res;
}