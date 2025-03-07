const Sequelize = require("sequelize");
const db = require('../db');
const Processors = db.processors;

// itgid.info - курс Node.js
// Task 05
// Создайте анонимный модуль в данном файле, через ORM Sequelize реализует запрос в базу данных comp таблица processors и возвращает массив title всех процессоров.

module.exports = async function () {
    let result = await Processors.findAll({
         attributes : ['title']
    })
    const title = result.map(item => item.title);
    return title;
}