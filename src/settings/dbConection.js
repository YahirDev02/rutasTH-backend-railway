import mySQL, { createConnection } from 'mysql';
import { BD_HOST, BD_NAME, BD_PASSWORD, BD_PORT, BD_USER } from './config.js'
const mysqlConection = () =>
    mySQL.createConnection({
        host: BD_HOST,
        user: BD_USER,
        password: BD_PASSWORD,
        database: BD_NAME,
        port: BD_PORT
        /* host: "127.0.0.1",//127.0.0.1
        user: "root",
        password: "020912Yahir,.-", //2021Aldo,.-
        database: "rutasth" */
    })
mysqlConection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = mysqlConection;