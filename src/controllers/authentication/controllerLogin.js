const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuarios');
const crypto  = require('crypto');

exports.makeLogin = async (application, req, res) => {
    req.assert('email', 'O seu e-mail não pode ser vazio.').notEmpty();
    req.assert('email', 'Digite um formato de email valido: usuario@email.com').isEmail();
    req.assert('senha', 'A senha não pode ser vazia.').notEmpty();
    const erros = req.validationErrors();
    if(erros){
        res.status(200).json({status:false,erros:erros});
        return;
    }
    const senhaCriptogafada = await crypto.createHash("md5").update(req.body.senha).digest("hex");
    req.body.senha = senhaCriptogafada;
    const findUser = await Usuario.findOne(req.body);
    if(!findUser) return res.status(200).json({status:false, msg:"Usuário ou senha errados."});
    req.session.statusLoginUser = true;
    req.session.nome = findUser.nome;
    req.session.sobrenome = findUser.sobrenome;
    req.session.email = findUser.email;
    return res.status(200).json({status:true, msg:"Login autorizado."});
}