//decodeUser - decodificar al usuario para evitar cambiar valores si no tiene el token
import jwt from "jsonwebtoken"

module.exports = (request, response, next) => {
    if (!request.get('authorization')) {
        response.json({ status: false, info: "No cuenta con los permisos, acceda primero." })
        return
    }
    const authorization = request.get('authorization')
    let token = ''
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    }

    //proccessEncrypt es la llave del programador y esta se utiliza en los controllers administrador "loginAccount"
    const decodeToken = jwt.verify(token, 'proccessEncrypt')
    if (!token || !decodeToken.id) {
        return response.status(401).json({ success: false, info: 'token faltante o inválido' })
    }
    next()
}