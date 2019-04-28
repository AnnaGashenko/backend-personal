// Core
import dg from 'debug';
const debug = dg('router:checkUserHash');

export const checkUserHash = (req, res, next) => {
    debug(`req.session.user - ${JSON.stringify(req.session.user)}`);

    const { hash: userHash } = req.session.user;
    const { hash } = req.params;

    if ( userHash === hash ) {
        next();
    } else {
        res.status(401).json({ message: 'Запрос не был обработан успешно из-за ошибки авторизации' });
    }
};
