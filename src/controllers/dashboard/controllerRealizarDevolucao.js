const mongoose = require('mongoose');
const Emprestimo = mongoose.model('Emprestimos');
const Equipamento = mongoose.model('Equipamentos');
const ObjectId = require('mongodb').ObjectID;
exports.renderRealizarDevolucao = (application, req, res) => {
    res.render('dashboard/realizar-devolucao');
};

exports.buscarEmprestimos = async (application, req, res) =>{
    if(req.body.emailUser==""){
        res.status(200).json({erro:true, msg: "Você precisa informar um e-mail para busca."});
        return;
    }
    const buscaEmprestimos = await Emprestimo.find({ status: true, emailDono: req.session.email, emailUsuarioEmprestado: req.body.emailUser});
    res.status(200).json({status:true, dados:buscaEmprestimos});
    return;
}
exports.concluirDevolucao = async (application, req, res) =>{
    const buscaEmprestimo = await Emprestimo.findOne({status:true, _id: new ObjectId(req.body.id)});
    const buscaEquipamento = await Equipamento.findOne({ idDono: req.session._id, _id: new ObjectId(buscaEmprestimo.itemEmprestado.idEquipamento)});
    let qntdAtualizada = parseInt(buscaEquipamento.qntdDisponivel + buscaEmprestimo.itemEmprestado.qntdEmprestada);
    await Equipamento.updateOne({ _id: new ObjectId(buscaEmprestimo.itemEmprestado.idEquipamento), idDono: req.session._id }, { $set: {qntdDisponivel: qntdAtualizada}});
    await Emprestimo.updateOne({ status: true, _id: new ObjectId(req.body.id) }, { $set: { status: false, dataDevolucao: new Date()}});
    res.status(200).json({status:true,msg:"Item devolvido com sucesso."});
}