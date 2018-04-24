const mongoose = require('mongoose');
const Equipamento = mongoose.model('Equipamentos');

exports.renderTodosEquipamentos = async (application, req, res) => {
    const todosEquipamentos = await Equipamento.find({idDono: req.session._id});
    res.render('dashboard/todos-equipamentos', {todosEquipamentos});
};
