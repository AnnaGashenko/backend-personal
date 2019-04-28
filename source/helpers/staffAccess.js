// Core
import dg from 'debug';
const debug = dg('router:staffAccess');

export const staffAccess = (req, res, next) => {
    debug(`req.session.user - ${JSON.stringify(req.session.user)}`);

    const { __t } = req.session.user;

    if ( __t === 'staff') {
        next();
    } else {
        res.status(401).json({ message: 'Access only for staff' });
    }
};
