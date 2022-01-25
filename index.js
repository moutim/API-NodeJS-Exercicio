import express from "express";
import { ler, inserir } from './src/aluno.js';

const app = express();
const porta = 3000;
// Habilitando express para receber json
app.use(express.json());
// Habilitando express para funcionar com dados de inputs
app.use(express.urlencoded({extended:true}));


// Rotas com GET
app.get('/', (req, res) => res.send('API de alunos com Node.js, Express e MySQL'));

// Le dados de todos os alunos
app.get('/alunos', (req, res) => ler(res));

app.get('/alunos/:id', (req, res) => res.send('Dados de UM aluno'))


// Rotas com POST: para inserir novos alunos
app.post('/alunos', (req, res) => {
    const novoAluno = req.body;
    inserir(novoAluno, res);
});

// Rotas com Put - para atualizar todos os dados de UM aluno
    // app.put('/alunos/:id', (req, res) => res.send('Atualizar dados UM aluno'));
    // Podemos usar somente o patch porque ela atualizar somente UM aluno ou varios alunos

// Rotas com Patch - para atualizar todos/alguns dados de UM aluno
app.patch('/alunos/:id', (req, res) => res.send('Atualizar dados todos/alguns alunos'));

// Rotas com Delete - para excluir alunos
app.delete('/alunos/:id', (req, res) => res.send('Apagar alunos'));



app.listen(porta, () => {
    console.log('Servidor rodando');
});