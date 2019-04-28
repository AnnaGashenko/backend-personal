// Core
import dg from 'debug';

// Instruments
import { Orders } from '../../../controllers';

const debug = dg('router:orders:order');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { orderHash: hash } = req.params;
        const orders = new Orders({ hash });
        const data = await orders.findByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const put = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { orderHash: hash } = req.params;
        const payload = req.body;
        const orders = new Orders({ hash, payload });
        const data = await orders.update();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { orderHash: hash } = req.params;
        const orders = new Orders({ hash });
        await orders.delete();

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
