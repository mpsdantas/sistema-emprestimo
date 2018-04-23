const mongoose = require('mongoose');
const Emprestimo= mongoose.model('Emprestimos');
const Equipamento = mongoose.model('Equipamentos');
exports.realizarEmprestimo = async (application, req, res) =>{
    if(req.body.email=="" || req.body.equipamento=="" || req.body.qntdEquipamento==""){
        res.status(200).json({erro:true, msg:"Existem erros no formulário verifique se você preencheu todos os campos."});
        return;
    }
    const buscaEquipamento = await Equipamento.findOne({nome:req.body.equipamento});
    if (buscaEquipamento.qntdDisponivel <= parseInt(req.body.qntdEquipamento)){
        res.status(200).json({ erro: true, msg: "A quantidade informada é maior do que a quantidade disponível." });
        return;
    }
    const novoEmprestimo = new Emprestimo({
        status: true,
        emailDono: req.session.email,
        emailUsuarioEmprestado: req.body.email,
        itemEmprestado: {
            nomeEquip: buscaEquipamento.nome,
            idEquipamento: buscaEquipamento._id,
            qntdEmprestada: req.body.qntdEquipamento
        },
        dataEmprestimo: new Date() 
    });
    await novoEmprestimo.save();
    await Equipamento.updateOne({ nome: buscaEquipamento.nome }, { $set: { qntdDisponivel: (buscaEquipamento.qntdDisponivel - req.body.qntdEquipamento)}});
    res.status(200).json({ status: true, msg: "Emprestimo realizado com sucesso." });
    return;
}