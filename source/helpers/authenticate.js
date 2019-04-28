// Core
import dg from 'debug';
const debug = dg('router:auth');

// Instruments
import { NotFoundError } from './';

export const authenticate = (req, res, next) => {
    debug(`req.session.user - ${JSON.stringify(req.session.user)}`);
    if (!req.session.user) {
        return next(new NotFoundError('cookie not found', 401));
    }

    const { hash } = req.session.user;

    if (hash) {
        next();
    } else {
        res.status(401).json({ message: 'authentication credentials are not valid' });
    }
};
