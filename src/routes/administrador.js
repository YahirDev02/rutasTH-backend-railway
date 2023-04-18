import { createAccount, loginAccount } from "../controllers/administrador";

module.exports = (app) => {
    //Creacion y logeo de cuentas
    app.post('/post/createAccount/admin', createAccount)
    app.post('/post/loginAccount/admin', loginAccount)
}