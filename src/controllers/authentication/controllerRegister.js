const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuarios');
const crypto  = require('crypto');
exports.makeRegister = async (application, req, res) =>{
    req.assert('nome', 'O seu nome não pode ser vazio').notEmpty();
    req.assert('sobrenome', 'O seu sobrenome não pode ser vazio.').notEmpty();
    req.assert('email', 'O seu e-mail não pode ser vazio.').notEmpty();
    req.assert('email', 'Digite um formato de email valido: usuario@email.com').isEmail();
    req.assert('senha', 'A senha não pode ser vazia.').notEmpty();
    req.assert('repetirSenha', 'O campo repetir senha não pode ser vazio.').notEmpty();
    req.assert('senha', 'As senhas não são iguais').equals(req.body.repetirSenha); 
    
    const erros = req.validationErrors();
    if(erros){
        res.status(200).json({status:false,erros:erros});
        return;
    }

    const findUser = await Usuario.findOne({email:req.body.email});
    const erroUsuario = [{ status: false, msg: "Usuário já cadastrado no sistema." }];
    if(findUser) return res.status(200).json({status:false,erros:erroUsuario});
    
    const senhaCriptogafada = await crypto.createHash("md5").update(req.body.senha).digest("hex");
    req.body.senha = senhaCriptogafada;

    const newUser = new Usuario(req.body);
    await newUser.save();
    
    res.status(200).json({ status: true, msg: "Usuário criado com sucesso." });
    return;
};