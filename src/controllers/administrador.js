import bcrypt from "bcrypt";
import mysqlConection from '../settings/dbConection'
import jwt from "jsonwebtoken";
//Para el desarrollo del login o crear usuario se ocupara las siguientes librerías
//npm install bcrypt jsonwebtoken

export const createAccount = async (request, response) => {
    try {
        const connection = mysqlConection()
        const { nameCreate, passwordCreate } = request.body; //Recibe los datos del body
        const passwordHash = await bcrypt.hash(passwordCreate, 10) //Encriptacion de la contraseña

        connection.connect(error => {
            if (error) throw error
            connection.query(
                `INSERT INTO administrador(usuario, password) VALUES('${nameCreate}','${passwordHash}')`,
                (err) => {
                    if (err) console.log(err);
                    response.json('Cuenta creada');
                })
            connection.end()
        })
    } catch (error) { //
        response.status(400).json({ success: false, info: error })
    }
}
//Aquí se lleva acabo el logeo de la cuenta creada o ingresada
export const loginAccount = (request, response) => {
    const { nameLogin, password } = request.body
    const dbAdministrador = mysqlConection()
    dbAdministrador.connect(error => {
        if (error) throw error;
        dbAdministrador.query(
            `SELECT * FROM administrador WHERE usuario='${nameLogin}'`,
            async (err, user) => {
                try {
                    if (user.length === 0) {
                        //evaluacion del usuario, este objeto lo esta enviando al fronted
                        response.json({ mensaje: 'Datos erroneos', info: false })
                        return
                    }
                    const userAdmin = user[0]
                    //"userAdmin.contraseña" userAdmin almacena 3 campos, despues del punto la contraseña va ser declarada igual al campo de la BDD
                    const passwordCorrect = await bcrypt.compare(password, userAdmin.password) 
                    if (nameLogin && passwordCorrect) {
                        const userDataToken = {
                            id: userAdmin.id_A,
                            nameLogin: userAdmin.usuario
                        }
                        //proccessEncrypt se puede sustituir por cualquier otra cosa, solo el programador debe saber y esta se utiliza en los MIDDLEWARES
                        const token = jwt.sign(userDataToken, 'proccessEncrypt') 

                        response.json({
                            id: userAdmin.id_A,
                            nameLogin: userAdmin.usuario,
                            token
                        })
                    } else {
                        //evaluacion de la contraseña, este objeto lo esta enviando al fronted
                        response.json({ info: false })
                    }
                } catch (error) {
                    console.log(error)
                }

            })
        dbAdministrador.end()
    })
}