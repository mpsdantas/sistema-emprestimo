const controllerRegister = require('../controllers/authentication/controllerRegister');
const controllerLogin = require('../controllers/authentication/controllerLogin');
module.exports = application => {
    
    application.get('/authentication/login', (req,res) => {
        res.render('authentication/login');
    });

    application.post('/authentication/login', (req,res) => {
        controllerLogin.makeLogin(application, req, res);
    });
    
    application.get('/authentication/register', (req,res) => {
        res.render('authentication/register');
    });

    application.post('/authentication/register', (req,res) => {
        controllerRegister.makeRegister(application, req, res);
    });
    
};