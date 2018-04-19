const mongoose = require('mongoose');
const Equipamento = mongoose.model('Equipamentos');

exports.renderTodosEquipamentos = async (application, req, res) => {
    const todosEquipamentos = await Equipamento.find({});
    res.render('dashboard/todos-equipamentos', {todosEquipamentos});
};