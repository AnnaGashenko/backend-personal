// Core
import mongoose from 'mongoose';

// Instruments
import { base } from './base';

// Document shape
export const staff = base.discriminator(
    'staff',
    new mongoose.Schema(
        {
            role: {
                type: String,
                required: true,
            },
            disabled: {
                type: Boolean,
            },
        },
    ),
);
