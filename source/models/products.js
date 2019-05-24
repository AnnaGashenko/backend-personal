// Core
import dg from 'debug';

// Instruments
import { products } from '../odm';

const debug = dg('router:products');

export class Products {
    constructor(data) {
        this.data = data;
    }

    async create() {

        const productsData = {
            ...this.data,
        };

        const data = await products.create(productsData);

        return data;
    }

    async find() {
        const data = await products.find().lean();

        return data;
    }

    async findByHash() {
        const { hash } = this.data;
        const data = await products
            .findOne({ hash })
            .lean();

        return data;
    }

    async update() {
        const { hash, payload } = this.data;
        const data = await products
            .findOneAndUpdate(
                { hash },
                { ...payload },
                { new: true }
            )
            .lean();

        return data;
    }

    async remove() {
        const { hash } = this.data;
        await products.findOneAndDelete({ hash });

        return true;
    }
}
