import express from "express";
import cors from 'cors';
import { ler, inserir, lerUm, atualizar, excluir } from './src/aluno.js';

const app = express();
// Habilitando outras portas para rodar a aplicacao
const porta = process.env.PORT || 3000;
// Permite acesso externo
app.use(cors());
// Habilitando express para receber json
app.use(express.json());
// Habilitando express para funcionar com dados de inputs
app.use(express.urlencoded({extended:true}));


// Rotas com GET
app.get('/', (req, res) => res.redirect('https://documenter.getpostman.com/view/19292971/UVeAtoGs'));
// Le dados de todos os alunos
app.get('/alunos', (req, res) => ler(res));
// Le dados de UM aluno
app.get('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    lerUm(id, res)
})


// Rotas com POST: para inserir novos alunos
app.post('/alunos', (req, res) => {
    const novoAluno = req.body;
    inserir(novoAluno, res);
});

// Rotas com Put - para atualizar todos os dados de UM aluno
    // app.put('/alunos/:id', (req, res) => res.send('Atualizar dados UM aluno'));
    // Podemos usar somente o patch porque ela atualizar somente UM aluno ou varios alunos

// Rotas com Patch - para atualizar todos/alguns dados de UM aluno
app.patch('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
});

// Rotas com Delete - para excluir alunos
app.delete('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    excluir(id, res);
});



app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});