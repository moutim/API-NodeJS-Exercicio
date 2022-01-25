import mysql from 'mysql2';

const dadosConexao = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
};
const conexao = mysql.createConnection(dadosConexao);

conexao.connect(erro => {
    (erro) ? console.error(`Erro ao conectar no banco: ${erro.message}`) : console.log('Banco de dados conectado com sucesso');
});

export default conexao;