// Core
import dg from 'debug';

// Instruments
import { Products } from '../../../controllers';

const debug = dg('router:products:product');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const {productHash: hash } = req.params;
        const products = new Products({ hash });
        const data = await products.findByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const put = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { productHash: hash } = req.params;
        const payload = req.body;
        const products = new Products({ hash, payload });
        const data = await products.update();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const {productHash: hash } = req.params;
        const products = new Products({ hash });
        await products.remove();

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
