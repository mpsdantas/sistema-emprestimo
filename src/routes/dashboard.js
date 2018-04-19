const routerAnalizer = require('../controllers/protectRouter');
const controllerDashboard = require('../controllers/dashboard');
module.exports = application => {
    application.get('/dashboard/index',routerAnalizer.protectRouterUser, (req,res) => {
        res.render('dashboard/index');
    });  
    application.get('/dashboard/novo-equipamento', routerAnalizer.protectRouterUser, (req, res) => {
        controllerDashboard.renderEquipamentos(application, req, res);  
    });
    application.get('/dashboard/todos-equipamentos', routerAnalizer.protectRouterUser, (req, res) =>{
        controllerDashboard.renderTodosEquipamentos(application, req, res);
    });
    application.get('/dashboard/editar-equipamento/:id', routerAnalizer.protectRouterUser, (req, res) =>{
        controllerDashboard.renderEditarEquipamento(application, req, res);
    });
    application.post('/dashboard/novo-equipamento', routerAnalizer.protectRouterUser, (req, res) => {
        controllerDashboard.makeCadastro(application, req, res);
    });
    application.post('/dashboard/editar-equipamento', routerAnalizer.protectRouterUser, (req, res) => {
        controllerDashboard.editarEquipamento(application, req, res);
    });
};