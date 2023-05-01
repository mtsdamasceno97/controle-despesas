const conn = require('./conn');

const getAll = async () => {

    try {
        const [despesas] = await conn.execute('SELECT * FROM despesas');
        return despesas;

    } catch (error) {
        console.log(error)
    }


};

const inserirDespesa = async (despesa) => {

    try {

        const {titulo,descricao,valor} = despesa;
        const dataUTC = new Date(Date.now()).toUTCString();

        const query = 'INSERT INTO despesas(titulo, descricao, valor,data_despesa) VALUES (?,?,?,?)';

        const [inserirDespesa] = await conn.execute(query, [titulo,descricao,valor,dataUTC]);
        return {insertId: inserirDespesa.insertId};

    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {
    getAll
}