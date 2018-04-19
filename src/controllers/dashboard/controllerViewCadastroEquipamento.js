const methods = require('../methods');
exports.renderEquipamentos = async (application, req, res) => {
    const categorias = await methods.getAllCategorias();
    res.render('dashboard/novo-equipamento',{categorias});
};