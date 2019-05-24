// Core
import dg from 'debug';

// Instruments
import { orders, products } from '../odm';

const debug = dg('router:orders');

export class Orders {
    constructor(data) {
        this.data = data;
    }

    async create() {

        const ordersData = {
            ...this.data,
        };

        const { pid, count }  = ordersData;
        const { total } =  await products.findById(pid).select('total -_id').lean();

        if(total < count) {
            throw new Error('Count of products in order more than we have');
        }

        const data = await orders.create(ordersData);
        const productCount = total - count;

        await products.findByIdAndUpdate(pid, { total: productCount});

        return data;
    }

    async find() {
        const data = await orders.find().lean();

        return data;
    }

    async findByHash() {
        const { hash } = this.data;
        const data = await orders
            .findOne({ hash })
            .lean();

        return data;
    }

    async update() {
        const { hash, payload } = this.data;
        const { pid, count } = payload;
        const { count: countBefore } =  await orders.findOne({ hash }).select('count -_id').lean();

        const orderCountDifference = countBefore - count;

        const { total } =  await products.findById(pid).select('total -_id').lean();

        const productCount = total + orderCountDifference;

        if (orderCountDifference !== 0) {
            await products.findByIdAndUpdate(pid, { total: productCount});
        }

        const data = await orders
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
        console.log('hash', hash);
        await orders.findOneAndDelete({ hash });

        return true;
    }
}
