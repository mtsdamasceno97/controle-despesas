const despesasModel = require('../models/despesasModel');

const getAll = async (req,res) => {
    try {

        const despesas = await despesasModel.getAll();
        return res.status(201).json(despesas);

    } catch (error) {

        console.log(error);
        
    }

};

module.exports = {
    getAll
}