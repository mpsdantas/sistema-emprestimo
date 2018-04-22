const controllerViewTodosEquipamentos = require('./controllerViewTodosEquipamentos');
const controllerViewCadastroEquipamentos = require('./controllerViewCadastroEquipamento');
const controlerCadastroNovoEquipamento = require('./controllerCadastroNovoEquipamento');
const controlerEditarEquipamento = require('./controllerEditarEquipamento');
const controllerRemoverEquipamento = require('./controllerRemoverEquipamento');
module.exports = {
    ...controlerCadastroNovoEquipamento, 
    ...controllerViewCadastroEquipamentos,
    ...controllerViewTodosEquipamentos,
    ...controlerEditarEquipamento,
    ...controllerRemoverEquipamento
};