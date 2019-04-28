// Core
import express from 'express';

// Handlers
import * as staff from './';

// Instruments
import createStaff from './_schemas/createStaff';
import { authenticate, staffAccess, validator } from '../../helpers';

const route = express.Router();

route.get('/', [ authenticate, staffAccess ], staff.get);
route.post('/', [ validator(createStaff) ], staff.post);

export { route as staff };
