const routerAnalizer = require('../controllers/protectRouter');
const controllerNovoCadastro = require('../controllers/dashboard/controllerCadastroNovoEquipamento');
module.exports = application => {
    application.get('/dashboard/index',routerAnalizer.protectRouterUser, (req,res) => {
        res.render('dashboard/index');
    });  
    application.get('/dashboard/novo-equipamento', routerAnalizer.protectRouterUser, (req, res) => {
        res.render('dashboard/novo-equipamento');
    });
    application.post('/dashboard/novo-equipamento', routerAnalizer.protectRouterUser, (req, res) => {
        controllerNovoCadastro.makeCadastro(application, req, res);
    });
};