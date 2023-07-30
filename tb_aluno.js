const Sequelize = require('sequelize');

const database = require('./db'); // conecta o banco de dados pelo arquivo db.js

const Aluno = database.define('aluno', {

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }

    
})

module.exports = Aluno;