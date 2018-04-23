const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const emprestimosSchema = new Schema({ 
    status: Boolean, 
    emailDono: String,
    emailUsuarioEmprestado: String,
    itemEmprestado:{
        nomeEquip: String,
        idEquipamento: String,
        qntdEmprestada: Number
    },
    dataEmprestimo: Date,
    dataDevolucao:  Date 
});

mongoose.model('Emprestimos', emprestimosSchema);