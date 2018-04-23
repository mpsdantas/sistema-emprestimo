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
    application.get('/dashboard/novo-emprestimo', routerAnalizer.protectRouterUser, (req, res) => {
        res.render('dashboard/novo-emprestimo');
    });
    application.get('/dashboard/realizar-devolucao', routerAnalizer.protectRouterUser, (req, res) => {
        controllerDashboard.renderRealizarDevolucao(application, req, res);
    });
    application.post('/dashboard/concluir-devolucao', routerAnalizer.protectRouterUser, (req, res) => {
        controllerDashboard.concluirDevolucao(application, req, res);
    });
    application.post('/dashboard/buscar-emprestimos', routerAnalizer.protectRouterUser, (req, res) => {
        controllerDashboard.buscarEmprestimos(application, req, res);
    });
    application.post('/dashboard/novo-equipamento', routerAnalizer.protectRouterUser, (req, res) => {
        controllerDashboard.makeCadastro(application, req, res);
    });
    application.post('/dashboard/editar-equipamento', routerAnalizer.protectRouterUser, (req, res) => {
        controllerDashboard.editarEquipamento(application, req, res);
    });
    application.post('/dashboard/buscar-equipamento', routerAnalizer.protectRouterUser, (req, res)=>{
        controllerDashboard.buscarEquipamento(application, req, res);
    });
    application.post('/dashboard/realizar-emprestimo', routerAnalizer.protectRouterUser, (req, res) => {
        controllerDashboard.realizarEmprestimo(application, req, res);
    });
    application.delete('/dashboard/apagar-equipamento/', routerAnalizer.protectRouterUser, (req, res) =>{
        controllerDashboard.removerEquipamento(application, req, res);
    });
};