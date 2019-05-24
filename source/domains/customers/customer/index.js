// Core
import dg from 'debug';

// Instruments
import { Customers } from '../../../controllers';

const debug = dg('router:customers:customer');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { hash } = req.params;
        const customers = new Customers({ hash });
        const data = await customers.findByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const put = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { hash } = req.params;
        const payload = req.body;
        const customers = new Customers({ hash, payload });
        const data = await customers.update();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { hash } = req.params;
        const customers = new Customers({ hash });
        await customers.remove();

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
