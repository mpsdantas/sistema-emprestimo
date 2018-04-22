const mongoose = require('mongoose');
const Equipamento = mongoose.model('Equipamentos');
const ObjectId = require('mongodb').ObjectID;

exports.removerEquipamento = async (application, req, res) => {
    console.log('Entrou');
    if(!req.body.id){
        res.status(200).json({erro:true,msg:"Você precisa informar um id."});
        return;
    }
    const removerEquipamento = await Equipamento.remove({_id: new ObjectId(req.body.id)});
    if(!removerEquipamento){
        res.status(200).json({ erro: true, msg: "Erro ao excluir o arquivo." });
    }
    res.status(200).json({status:true, msg:"Arquivo apagado com sucesso."});
};