exports.getErrorsEquipamentos = (req, res) => {
    req.assert('nome', 'O nome do equipamento não pode ser vazio.').notEmpty();
    req.assert('qntdTotal', 'A quantidade não pode ser vazia.').notEmpty();
    req.assert('categoria', 'A categoria não pode ser vazia.').notEmpty();
    const erros = req.validationErrors();
    return erros;
};   
    