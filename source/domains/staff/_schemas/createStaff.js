export default {
    type:       'object',
    properties: {
        name: {
            type:       'object',
            properties: {
                first: {
                    type:      'string',
                    minLength: 2,
                },
                last: {
                    type:      'string',
                    minLength: 2,
                },
            },
            required: [ 'first', 'last' ],
        },
        emails: {
            type: 'array',
            properties: {
                email: {
                    type: 'string',
                },
                primary: {
                    type: 'boolean',
                }
            },
            required: [ 'email' ],
        },
        phones: {
            type: 'array',
            properties: {
                phone: {
                    type: 'string',
                },
                primary: {
                    type: 'boolean',
                }
            }
        },
        password: {
            type: 'string',
        },
        role: {
            type: 'string',
        },
        disabled: {
            type: 'boolean',
        },
    },
    required: ['password', 'role'],

    additionalProperties: false,
};
