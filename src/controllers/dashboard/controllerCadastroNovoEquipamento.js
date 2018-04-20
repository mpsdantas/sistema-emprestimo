const mongoose = require('mongoose');
const Equipamento = mongoose.model('Equipamentos');

exports.makeCadastro = async (application, req, res) => {
    req.assert('nome', 'O nome do equipamento não pode ser vazio.').notEmpty();
    req.assert('qntdTotal', 'A quantidade não pode ser vazia.').notEmpty();
    req.assert('categoria', 'A categoria não pode ser vazia.').notEmpty();
    
    const erros = req.validationErrors();
    if(erros){
        res.status(200).json({erroForm:true,erros:erros});
        return;
    }

    req.body.qntdDisponivel = req.body.qntdTotal;
    const novoEquipamento = new Equipamento(req.body);
    await novoEquipamento.save();

    res.status(200).json({status:true, msg: "Equipamento cadastrado com sucesso."});
};