module.exports = application => {
    application.get('/',(req, res) =>{
        res.redirect('/authentication/login');
    });
};