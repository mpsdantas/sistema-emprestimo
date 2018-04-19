exports.makeCadastro = (application, req, res) =>{
    console.log(req.body);
    res.status(200).json({status:true});
};