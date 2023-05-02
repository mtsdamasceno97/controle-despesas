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

const deletarDespesa = async(id) => {
    const despesaRemover = await conn.execute('DELETE FROM despesas WHERE id = ?', [id]);
    return despesaRemover;
}

const atualizarDespesa = async(id,despesa) => {
   
    const {titulo,descricao,valor} = despesa;
   
    const query = 'UPDATE despesas SET titulo = ?, descricao = ?, valor = ? WHERE id = ?';
    const despesaAtualizar = await conn.execute(query,[titulo,descricao,valor,id]);
    return despesaAtualizar;
}

module.exports = {
    getAll,
    inserirDespesa,
    deletarDespesa,
    atualizarDespesa
}