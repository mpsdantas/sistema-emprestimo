const methods = require('../methods');
exports.renderEquipamentos = async (application, req, res) => {
    const categorias = await methods.getAllCategorias(req);
    res.render('dashboard/novo-equipamento',{categorias});
};