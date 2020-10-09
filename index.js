const customExpress = require('./src/config/customExpress');
const connection = require('./src/infra/connection');
const Tables = require('./src/infra/tables');

connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        const app = customExpress();
        Tables.init(connection);
        app.listen(3000, () => {
            console.log('Sever in port 3000');
        });
    }
});