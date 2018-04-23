const mongoose = require('mongoose');
const Emprestimo = mongoose.model('Emprestimos');

exports.viewTodosEmprestimos = async (application, req, res) => {
    const todosEmprestimos = await Emprestimo.find({emailDono:req.session.email});
    res.render('dashboard/todos-emprestimos',{todosEmprestimos})
};