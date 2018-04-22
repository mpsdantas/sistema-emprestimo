const controllerViewTodosEquipamentos = require('./controllerViewTodosEquipamentos');
const controllerViewCadastroEquipamentos = require('./controllerViewCadastroEquipamento');
const controlerCadastroNovoEquipamento = require('./controllerCadastroNovoEquipamento');
const controlerEditarEquipamento = require('./controllerEditarEquipamento');
const controllerRemoverEquipamento = require('./controllerRemoverEquipamento');
const controllerBuscarEquipamento = require('./controllerBuscarEquipamento');
const controllerRealizarEmprestimo = require('./controllerRealizarEmprestimo');
module.exports = {
    ...controlerCadastroNovoEquipamento, 
    ...controllerViewCadastroEquipamentos,
    ...controllerViewTodosEquipamentos,
    ...controlerEditarEquipamento,
    ...controllerRemoverEquipamento,
    ...controllerBuscarEquipamento,
    ...controllerRealizarEmprestimo
};