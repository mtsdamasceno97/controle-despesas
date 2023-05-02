const despesasModel = require('../models/despesasModel');

const getAll = async (req,res) => {
    try {

        const despesas = await despesasModel.getAll();
        return res.status(201).json(despesas);

    } catch (error) {

        console.log(error);
        
    }

};

const inserirDespesa = async(req,res) => {
    try {

        const despesa = await despesasModel.inserirDespesa(req.body);
        return res.status(201).json(despesa);

    } catch (error) {

        console.log(error);

    }
};

const deletarDespesa = async (req,res) => {
    const {id} = req.params;
    await despesasModel.deletarDespesa(id);
    return res.status(204).json();
}

const atualizarDespesa = async (req,res) => {
    const {id} = req.params;
    
    await despesasModel.atualizarDespesa(id,req.body);
    return res.status(204).json();
}    

module.exports = {
    getAll,
    inserirDespesa,
    deletarDespesa,
    atualizarDespesa
}