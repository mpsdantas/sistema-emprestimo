const mongoose = require('mongoose');
const Equipamento = mongoose.model('Equipamentos');
const matchSorter = require('match-sorter');
exports.buscarEquipamento = async (application, req, res) =>{
    if(req.body.valorPesquisa==""){
        res.status(200).json({erro:true, msg:"Insira algum valor para realizar a pesquisa"});
        return;
    }
    const todosEquipamentos = await Equipamento.find({idDono:req.session._id});
    const equipamentoFiltrado = matchSorter(todosEquipamentos, req.body.valorPesquisa, { keys: ['nome', 'codigo'] });
    res.status(200).json(equipamentoFiltrado);
}