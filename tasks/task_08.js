const Sequelize = require("sequelize");
const {Op} = require('sequelize')
const db = require('../db');
const Processors = db.processors;

// itgid.info - курс Node.js
// Task 08
// Создайте анонимный модуль в данном файле, через ORM Sequelize реализует запрос в базу данных comp таблица processors и возвращает массив title процессоров с кешем больше 35

// подсказка     where :  {cache : { [Op.gte] : 35}}

module.exports = async function () {

}