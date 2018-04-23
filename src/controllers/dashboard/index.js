const controllerViewTodosEquipamentos = require('./controllerViewTodosEquipamentos');
const controllerViewCadastroEquipamentos = require('./controllerViewCadastroEquipamento');
const controlerCadastroNovoEquipamento = require('./controllerCadastroNovoEquipamento');
const controlerEditarEquipamento = require('./controllerEditarEquipamento');
const controllerRemoverEquipamento = require('./controllerRemoverEquipamento');
const controllerBuscarEquipamento = require('./controllerBuscarEquipamento');
const controllerRealizarEmprestimo = require('./controllerRealizarEmprestimo');
const controllerRealizarDevolucao = require('./controllerRealizarDevolucao');
const controllerViewTodosEmprestimos = require('./controllerViewTodosEmprestimos');
const controllerDestroySession = require('./controllerDestroySession');
const controllerViewIndexDashboard = require('./controllerViewIndexDashboard');
module.exports = {
    ...controlerCadastroNovoEquipamento, 
    ...controllerViewCadastroEquipamentos,
    ...controllerViewTodosEquipamentos,
    ...controlerEditarEquipamento,
    ...controllerRemoverEquipamento,
    ...controllerBuscarEquipamento,
    ...controllerRealizarEmprestimo,
    ...controllerRealizarDevolucao,
    ...controllerViewTodosEmprestimos,
    ...controllerDestroySession,
    ...controllerViewIndexDashboard
};