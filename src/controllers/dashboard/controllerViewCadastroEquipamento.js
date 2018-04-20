const mongoose = require('mongoose');
const Equipamento = mongoose.model('Equipamentos');
const unique = require('array-unique');
exports.renderEquipamentos = async (application, req, res) => {
    const equipamentos = await Equipamento.find({});
    let categorias = new Array();
    for(let i = 0; i<equipamentos.length; i++){
        categorias[i] = equipamentos[i].categoria;
    }
    categorias = unique(categorias);
    res.render('dashboard/novo-equipamento',{categorias});
};