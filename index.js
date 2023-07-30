const { Sequelize } = require('sequelize');

(async() => {

const database = require('./db');

const Aluno = require('./tb_aluno');

await database.sync(); // verifica os modelos do projeto e compara com o banco de dados, se a tabela não existe ele cria as tabelas. 
// O banco de dados deve existir para que as tabelas sejam criadas. 

// Adicionando um novo produto
const novoAluno = Aluno.create(
    {
        nome: 'Paula Mota',
        email: 'paula@gmail.com',
        telefone: '61-9955-8888'
    }
)
console.log(Aluno);

// Procura todos alunos na tabela
const selecionarAluno = await Aluno.findAll();
console.log(selecionarAluno);

// Procura aluno por ID na tabela e faz alteração de um campo
const selecionarIdAluno = await Aluno.findByPk(1);
selecionarIdAluno.telefone = '61-9222-2222';
await selecionarIdAluno.save();
console.log(selecionarIdAluno);

// Procura aluno usando Where na tabela
const selecionarAlunoWhere = await Aluno.findAll(
    {
        where: {
            idade: 18
        }
    }
);
console.log(selecionarAlunoWhere);

// Excluir aluno por idade
await Aluno.destroy({where:{
    idade: 18
}})

})();