import conexao from "./banco";

/* Funcoes para o CRUD */

function ler(res){
    const sql = `SELECT * FROM alunos ORDER BY NOME`;
    conexao.query(sql, (erro, result) => {
        if(result.length  === 0){
            res.status(204).end();
            return;
        } else if(erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(result);
        }
    }); 
}

export { ler };