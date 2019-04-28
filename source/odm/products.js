import mongoose from 'mongoose';

const hashPlugin = require('../helpers/plugins/addHash');

// Document shape
const schema = new mongoose.Schema(
    {
        title: {
            type:     String,
            required: true,
            unique:   true,
        },
        description: String,
        price: {
            type: Number,
            min: [0, 'price can not be lower than zero'],
            required: true,
        },
        discount: {
            type: Number,
            min: [0, 'discount can not be lower than zero'],
            max: [50, 'discount can not be grater than 50'],

        },
        total: {
            type: Number,
            required: true,
            min: [0, 'discount can not be lower than zero'],
        }
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
export const products = mongoose.model('products', schema);
