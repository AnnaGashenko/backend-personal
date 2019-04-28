// Core
import dg from 'debug';

// Instruments
import { Login } from '../../controllers';

const debug = dg('router:auth');

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        if (!req.headers.authorization) {
            throw new Error('credentials are not valid');
        }

        const [ , credentials ] = req.headers.authorization.split(' ');
        const [ email, password ] = Buffer.from(credentials, 'base64')
            .toString()
            .split(':');

        const login = new Login({ email, password });
        const { hash, __t } = await login.login();

        req.session.user = { hash, __t };
        res.sendStatus(204);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
