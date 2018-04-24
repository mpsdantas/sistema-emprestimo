const mongoose = require('mongoose');
const Equipamento = mongoose.model('Equipamentos');
const unique = require('array-unique');

exports.getAllCategorias = async (req) => {
    const equipamentos = await Equipamento.find({idDono: req.session._id});
    let categorias = new Array();
    for(let i = 0; i<equipamentos.length; i++){
        categorias[i] = equipamentos[i].categoria;
    }
    categorias = unique(categorias);
    return categorias;
}
