// Core
import dg from 'debug';

// Instruments
import { Customers } from '../../controllers';

const debug = dg('router:сustomers');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const сustomers = new Customers();
        const data = await сustomers.find();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const сustomers = new Customers(req.body);
        const data = await сustomers.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
