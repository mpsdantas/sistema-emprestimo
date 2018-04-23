const mongoose = require('mongoose');
const Equipamento = mongoose.model('Equipamentos');
const methods = require('../methods');

exports.makeCadastro = async (application, req, res) => {
    const erros = methods.getErrorsEquipamentos(req, res);
    if(erros){
        res.status(200).json({erroForm:true,erros:erros});
        return;
    }
    req.body.qntdDisponivel = req.body.qntdTotal;
    req.body.idDono = req.session._id;
    const novoEquipamento = new Equipamento(req.body);
    await novoEquipamento.save();

    res.status(200).json({status:true, msg: "Equipamento cadastrado com sucesso."});
};