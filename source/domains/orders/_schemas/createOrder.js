export default {
    type:       'object',
    properties: {
        uid: {
            type: 'string',
        },
        pid: {
            type: 'string',
        },
        count: {
            type: 'number',
            minimum: 1,
        },
        comment: {
            type: 'string',
        },
    },
    required: ['uid', 'pid', 'count'],

    additionalProperties: false,
};
