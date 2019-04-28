import mongoose from 'mongoose';
const hashPlugin = require('../../helpers/plugins/addHash');

// Document shape
const schema = new mongoose.Schema(
    {
        name: {
            first: {
                type:     String,
                required: true,
            },
            last: {
                type:     String,
                required: true,
            },
        },
        emails: [
            {
                email: {
                    type: String,
                    required: true,
                    unique: true,
                },
                primary: Boolean,
            },
        ],
        phones: [
            {
                phone: String,
                primary: Boolean,
            },
        ],
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

schema.index({ 'name.first': 'text', 'name.last': 'text' });
schema.plugin(hashPlugin);

// Collection
export const base = mongoose.model('users', schema);
