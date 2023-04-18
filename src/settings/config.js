import express from "express";
import cors from 'cors'

const app = express();

//settings
//app.set('port', process.env.PORT || 8080); 
app.set('port', process.env.PORT || 3000);

/**Configuraciones con Railway */
export const BD_HOST = process.env.BD_HOST || 'localhost'
export const BD_USER = process.env.DB_USER || 'root'
export const BD_PASSWORD = process.env.DB_PASSWORD || '020912Yahir,.-'
export const BD_NAME = process.env.DB_NAME || 'rutasth'
export const BD_PORT = process.env.DB_PORT || '3306'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/*
//Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
*/
const config = {
    application: {
        server: [
            {
                origin: 'localhost:5500',
                credencials: true
            }
        ]
    }
}

app.use(cors(
    config.application.server
));
module.exports = app;