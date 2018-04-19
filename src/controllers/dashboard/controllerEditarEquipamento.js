const mongoose = require('mongoose');
const Equipamento = mongoose.model('Equipamentos');
const ObjectId = require('mongodb').ObjectID;
const methods = require('../methods');
exports.renderEditarEquipamento = async (application, req, res) => {
    const equipamentoSelecionado = await Equipamento.findOne({_id: new ObjectId(req.params.id)});
    const categorias = await methods.getAllCategorias();
    console.log(categorias);
    res.render('dashboard/editar-equipamento',{categorias, equipamentoSelecionado});
    return; 
};

exports.editarEquipamento = async (application, req, res) => {
    const erros = methods.getErrorsEquipamentos(req, res);
    if(erros){
        res.status(200).json({erroForm:true,erros:erros});
        return;
    }
    const equipamentoAnterior = await Equipamento.findOne({_id: new ObjectId(req.body.id)});
    req.body.qntdDisponivel = equipamentoAnterior.qntdDisponivel + (req.body.qntdTotal - equipamentoAnterior.qntdDisponivel);
    await Equipamento.update({_id: new ObjectId(req.body.id)},{$set:req.body});
    res.status(200).json({status:true, msg: "Equipamento atualizado com sucesso."});
};