const conn = require('./conn');

const getAll = async () => {

    try {
        const [rendas] = await conn.execute('SELECT * FROM rendas');
        return rendas;

    } catch (error) {
        console.log(error)
    }


};

const inserirRenda = async (renda) => {

    try {

        const {titulo,valor} = renda;

        const query = 'INSERT INTO rendas(titulo, valor) VALUES (?,?)';

        const [inserirRenda] = await conn.execute(query, [titulo,valor]);
        return {insertId: inserirRenda.insertId};

    } catch (error) {
        console.log(error)
    }
    
}

const deletarRenda = async(id) => {
    const rendaRemover = await conn.execute('DELETE FROM renda WHERE id = ?', [id]);
    return rendaRemover;
}

const atualizarRenda = async(id,renda) => {
   
    const {titulo,valor} = renda;
   
    const query = 'UPDATE rendas SET titulo = ?,valor = ? WHERE id = ?';
    const rendaAtualizar = await conn.execute(query,[titulo,valor,id]);
    return rendaAtualizar;
}

module.exports = {
    getAll,
    inserirRenda,
    deletarRenda,
    atualizarRenda
}