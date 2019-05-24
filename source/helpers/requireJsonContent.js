export const requireJsonContent = (req, res, next) => {
    if (req.method === 'GET') {
        return next();
    }

    if (!req.headers[ 'content-type' ]) {
        return res
            .status(400)
            .send(
                `Server did not receive requires content-type header`,
            );
    }

    if (!req.headers[ 'content-type' ].includes('application/json')) {
        return res
            .status(400)
            .send(
                `Server requires content-type header equal to application/json but received ${
                    req.headers[ 'content-type' ]
                    }`,
            );
    }

    next();
};
