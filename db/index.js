const Sequelize = require("sequelize");

const sequelize =  new Sequelize("comp", "root", "", {
    dialect: "mysql",
    host: "127.0.0.1",
    logging: false
});

const Processors = require('./Processors')(sequelize);

module.exports = {
    sequelize : sequelize,
    processors : Processors
}