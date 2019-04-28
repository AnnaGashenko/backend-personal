// Core
import express from 'express';

// Handlers
import * as orders from './';
import * as orderHash from './order';

// Instruments
import createOrder from './_schemas/createOrder';
import { authenticate, validator } from '../../helpers';

const route = express.Router();

route.get('/', [ authenticate ], orders.get);
route.post('/', [ authenticate, validator(createOrder) ], orders.post);

route.get('/:orderHash', [ authenticate ], orderHash.get);
route.put('/:productHash', [ authenticate, validator(createOrder) ], orderHash.put);
route.delete('/:productHash', [ authenticate ], orderHash.remove);

export { route as orders };
