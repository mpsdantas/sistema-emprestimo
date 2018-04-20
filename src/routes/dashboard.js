const routerAnalizer = require('../controllers/protectRouter');
const controllerNovoCadastro = require('../controllers/dashboard/controllerCadastroNovoEquipamento');
const controllerViewEquipamento = require('../controllers/dashboard/controllerViewCadastroEquipamento');

module.exports = application => {
    application.get('/dashboard/index',routerAnalizer.protectRouterUser, (req,res) => {
        res.render('dashboard/index');
    });  
    application.get('/dashboard/novo-equipamento', routerAnalizer.protectRouterUser, (req, res) => {
        controllerViewEquipamento.renderEquipamentos(application, req, res);
    });
    application.post('/dashboard/novo-equipamento', routerAnalizer.protectRouterUser, (req, res) => {
        controllerNovoCadastro.makeCadastro(application, req, res);
    });
};