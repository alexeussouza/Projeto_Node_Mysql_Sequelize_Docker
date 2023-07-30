//Criando a classe Sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_mysql', 'root', 'root', {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306
    }
)

module.exports = sequelize;