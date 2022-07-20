// ================ Подключение зависимостей ==================
require('dotenv').config();
const express = require('express');

// Для работы с бд
const sequelize = require('./db');

// Для работы с файлами
const fileUpload = require('express-fileupload');

// Для работы с корсами
const cors = require('cors');

// Модельки
const models = require('./models/models');

// Роутер
const router = require('./routes/index');

// Обработчик ошибок
const errorHandler = require('./middleware/ErrorHandler');

// Для работы с куки
const cookieParser = require('cookie-parser');

const path = require('path');
// ================ Подключение зависимостей ==================

const PORT = process.env.PORT || 5000;

const app = express();

// Подключение корсов
app.use(cors());

// Для парса json
app.use(express.json());

//  Для раздачи статики сервером
app.use(express.static(path.resolve(__dirname, 'static')))

// Для работы с файлами
app.use(fileUpload({ }));

// Подключение роутов
app.use('/api', router);

// Подключение для работы с куками
app.use(cookieParser);

// Обработка ошибок, должен быть последним мидлвейром
app.use(errorHandler);

// Функция запуска сервера
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`start server ${PORT}`)
        });
    } catch (e) {
        console.log(e)
    }
};

start();