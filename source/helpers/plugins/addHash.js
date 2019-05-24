import v4 from 'uuid/v4';

module.exports = (schema, options) => {
    schema.add({
        hash: {
            type: String,
            index: true,
        },
    });

    schema.pre('save', function (next) {
        this.hash = v4();
        next();
    });
};
