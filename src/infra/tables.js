class Tables {
    init(connection) {
        this.connection = connection;
        this.createAtendimentos();
    }

    createAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        this.connection.query(sql, error => {
            if (error) {
                console.log(error);
            } else {
                console.log('Table atendimentos OK');
            }
        })
    }
}

module.exports = new Tables;