const customExpress = require('./src/config/customExpress');

const app = customExpress();

app.listen(3000, () => {
    console.log('Sever in port 3000');
});

