// Core
import mongoose from 'mongoose';

// Instruments
import { base } from './base';

// Document shape
export const customers = base.discriminator(
    'customers',
    new mongoose.Schema(
        {
            city: {
                type: String,
                index: 'text',
            },
            country: {
                type: String,
                index: 'text',
            },
        },
    ),
);
