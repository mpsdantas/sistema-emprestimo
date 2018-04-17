const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const emprestimosSchema = new Schema({ 
    status: Boolean, 
    nomeDono: String,
    nomeUsuarioEmprestado: String,
    itensEmprestados: [{
        nomeEquip: String,
        qntdEmprestada: Number
    }],
    dataEmprestimo: Date,
    dataDevolucao:  Date 
});

mongoose.model('Emprestimos', emprestimosSchema);