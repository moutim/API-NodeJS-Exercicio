import mysql from 'mysql2';

const dadosConexaoLocal = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
};

const dadosConexaoRemoto = {
    host: 'sql10.freesqldatabase.com',
    user: 'sql10468161',
    password: 'S9tjWzz8qk',
    database: 'sql10468161'
};

const conexao = mysql.createConnection(dadosConexaoRemoto);

conexao.connect(erro => {
    (erro) ? console.error(`Erro ao conectar no banco: ${erro.message}`) : console.log(`Banco conectado em: ${conexao.config.host}`);
});

export default conexao;