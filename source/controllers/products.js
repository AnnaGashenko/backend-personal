import {Products as ProductsModel} from '../models';

export class Products {
    constructor(data) {
        this.models = {
            products: new ProductsModel(data),
        };
    }

    async create() {
        const data = await this.models.products.create();

        return data;
    }

    async find() {
        const data = await this.models.products.find();

        return data;
    }

    async findByHash() {
        const data = await this.models.products.findByHash();

        return data;
    }

    async update() {
        const data = await this.models.products.update();

        return data;
    }

    async delete() {
        const data = await this.models.products.delete();

        return data;
    }
}
