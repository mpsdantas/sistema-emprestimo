const controllerViewTodosEquipamentos = require('./controllerViewTodosEquipamentos');
const controllerViewCadastroEquipamentos = require('./controllerViewCadastroEquipamento');
const controlerCadastroNovoEquipamento = require('./controllerCadastroNovoEquipamento');
const controlerEditarEquipamento = require('./controllerEditarEquipamento');

module.exports = {
    ...controlerCadastroNovoEquipamento, 
    ...controllerViewCadastroEquipamentos,
    ...controllerViewTodosEquipamentos,
    ...controlerEditarEquipamento
};