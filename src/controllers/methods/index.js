const getAllCategorias = require('./getAllCategorias');
const errorsEquipamento = require('./errorsEquipamento');
module.exports = {
    ...getAllCategorias,
    ...errorsEquipamento
}