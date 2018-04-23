exports.destroySession = (application, req, res) =>{
    req.session.destroy(err => res.redirect('/'));
}