const { User } = require('../models/models');
const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Неккоректный email или password'));
        }

        const candidate = await User.findOne({ where: { email } });
        
        if (candidate) {
            return next(ApiError.badRequest('Такой пользователь уже существует'));
        }

        const hashPassword = await bcrypt.hash(password, 5);

        
        const user = await User.create({ email, password: hashPassword, role });
        const token = generateJwt(user.id, email, role);
        return res.json(token);
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) return next(ApiError.badRequest('Такого пользователя не существует'));

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Пароль неверный'));
        }

        const jwtToken = generateJwt(user.id, user.email, user.role);

        return res.json({
            email: user.email,
            role: user.role,
        });
    }

    async checkAuth(req, res) {

    }
}

module.exports = new UserController();