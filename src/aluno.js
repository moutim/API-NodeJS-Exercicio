import conexao from "./banco.js";

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

function inserir(aluno, res){
    const sql = `INSERT INTO alunos SET ?`
    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({'status' : 'Aluno inserido!'})
        }
    });
}

function lerUm(id, res){
    const sql = `SELECT * FROM alunos WHERE id = ?`;
    conexao.query(sql, id, (erro, result) => {
        if(result.length  === 0){
            res.status(204).end();
            return;
        } else if(erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(result);
        }
    })
}

function atualizar(id, aluno, res){
    const sql = `UPDATE alunos SET ? WHERE id = ?`;
    conexao.query(sql, [aluno, id], (erro, result) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            // res.status(200).json({'status': 'Atualizada com sucesso'});
            res.status(200).json({...aluno, id})
        }
    })
}

export { ler, inserir, lerUm, atualizar };