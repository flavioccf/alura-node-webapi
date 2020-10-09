const connection = require('../infra/connection');

class Atendimento {
    addNew(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ?';
        connection.query(sql, atendimento, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
            }
        })
    }
}

module.exports = new Atendimento;