import mongoose from 'mongoose';

const hashPlugin = require('../helpers/plugins/addHash');

import { customers, products } from './'

// Document shape
const schema = new mongoose.Schema(
    {
        uid: {
            type:     mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: 'customers',
            validate: {
                validator(id) {
                    return customers.findById(id).lean();
                },
                message(props) {
                    const { path, value } = props;
                    return `Value: '${value}' are not valid for ${path} field`;
                },
            },
        },
        pid: {
            type:     mongoose.SchemaTypes.ObjectId,
            ref: 'products',
            required: true,
            validate: {
                validator(id) {
                    return products.findById(id).lean();
                },
                message(props) {
                    const { path, value } = props;
                    return `Value: '${value}' are not valid for ${path} field`;
                },
            },
        },
        count: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
        },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

schema.plugin(hashPlugin);

// Collection
export const orders = mongoose.model('orders', schema);
