// Core
import Ajv from 'ajv';

// Instruments
import { ValidationError } from './';

export const validator = (schema) => (req, res, next) => {
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(schema);
    const valid = validate(req.body);

    if (valid) {
        next();
    } else {
        const errors = validate.errors.map(error => {
            return (error.keyword === 'required') ? `${error.message}` : `${error.dataPath.substring(1)} : ${error.message}`
        }).join(', ');

        next(new ValidationError(`${req.method}: ${req.originalUrl} [ ${errors} ]`));
    }
};
