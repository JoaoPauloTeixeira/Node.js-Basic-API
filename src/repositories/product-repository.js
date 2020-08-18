'use strict';

const mongoose = require('mongoose');
const productMongoose = mongoose.model('Product');

exports.get = async() => {
    const res = await productMongoose
        .find({
            activate: true
        }, 'title price slug');
        return res;
};

exports.getBySlug = async(slug) => {
    const res = await productMongoose
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.getById = async(id) => {
    const res = await productMongoose
        .findById(id);
    return res;
}

exports.getByTag = async(tag) => {
    const res = productMongoose
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.create = async(data) => {
    var productMongoose = new Product(data);
    await productMongoose.save();
}

exports.update = async(id, data) => {
    await productMongoose
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

exports.delete = async(id) => {
    await productMongoose
        .findOneAndRemove(id);
}