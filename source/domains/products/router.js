// Core
import express from 'express';

// Handlers
import * as products from './';
import * as productHash from './product';

// Instruments
import createProduct from './_schemas/createProduct';
import { authenticate, staffAccess, validator } from '../../helpers';

const route = express.Router();

route.get('/', products.get);
route.post('/', [ authenticate, staffAccess, validator(createProduct) ], products.post);

route.get('/:productHash', productHash.get);
route.put('/:productHash', [ authenticate, staffAccess, validator(createProduct) ], productHash.put);
route.delete('/:productHash', [ authenticate, staffAccess ], productHash.remove);

export { route as products };
