const mongoose = require('mongoose');
const Emprestimo = mongoose.model('Emprestimos');
const Equipamento = mongoose.model('Equipamentos');

exports.viewDashboard = async (application, req, res) =>{
    const todosEquipamentos = await Equipamento.find({idDono:req.session._id});
    const emprestimosAtivos = await Emprestimo.find({ emailDono: req.session.email, status: true });
    const emprestimosEntregues = await Emprestimo.find({ emailDono: req.session.email, status: false });
    let somatorioTodosEquipamentos = 0;
    let somatorioEquipamentosEmprestados = 0;
    let somatorioEmprestimosDevolvidos = 0;
    let somatorioEmprestimosPendentes = 0;
    
    for (let i = 0; i < todosEquipamentos.length; i++) {
        somatorioTodosEquipamentos += todosEquipamentos[i].qntdTotal;
        somatorioEquipamentosEmprestados += todosEquipamentos[i].qntdTotal - todosEquipamentos[i].qntdDisponivel;
    }
    for(let i =0; i<emprestimosAtivos.length; i++){
        somatorioEmprestimosPendentes += emprestimosAtivos[i].itemEmprestado.qntdEmprestada;
    }
    for (let i = 0; i < emprestimosEntregues.length; i++) {
        somatorioEmprestimosDevolvidos += emprestimosEntregues[i].itemEmprestado.qntdEmprestada;
    }
    res.render('dashboard/index',{somatorioTodosEquipamentos,somatorioEquipamentosEmprestados,somatorioEmprestimosDevolvidos,somatorioEmprestimosPendentes});
};