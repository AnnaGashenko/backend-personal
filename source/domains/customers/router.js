// Core
import express from 'express';

// Handlers
import * as customers from './';
import * as hash from './customer';

// Instruments
import createCustomer from './_schemas/createCustomer';
import { authenticate, staffAccess, checkUserHash, validator } from '../../helpers';

const route = express.Router();

route.get('/', [ authenticate, staffAccess ], customers.get);
route.post('/', [ validator(createCustomer) ], customers.post);

route.get('/:hash', [ authenticate, checkUserHash ], hash.get);
route.put('/:hash', [ authenticate, checkUserHash, validator(createCustomer) ], hash.put);
route.delete('/:hash', [ authenticate, checkUserHash ], hash.remove);

export { route as customers };
