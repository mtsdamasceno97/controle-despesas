const conn = require('./conn');

const getAll = async () => {

    try {
        const [despesas] = await conn.execute('SELECT * FROM despesas');
        return despesas;

    } catch (error) {
        console.log(error)
    }


};

module.exports = {
    getAll
}