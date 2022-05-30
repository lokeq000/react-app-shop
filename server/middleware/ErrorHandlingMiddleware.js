const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
    let {name, price, brandId, typeId, info} = req.body
    console.log(err, 'body', name, price, brandId, typeId, info);
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }

    return res.status(500).json({ message: 'Непредвиденная ошибка!' });
}