const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const equipamentosSchema = new Schema({ 
    nome: String,
    idDono: String,
    qntdTotal: Number,
    qntdDisponivel: Number,
    categoria: String,
    codigo: String
});

mongoose.model('Equipamentos', equipamentosSchema);