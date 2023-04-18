import { getadminCombiValoracion, getComentarios, postRutasComentario, deletecomentariosAdmin, getComentariosByID, getcomentByID } from "../controllers/comentario_puntuacion";
import decodeUser from "../middlewares/decodeUser"

module.exports = (app) => {
    app.get('/get/adminCombi/Valoracion', getadminCombiValoracion)
    app.get('/get/comentario/all', getComentarios)
    app.get('/get/ComentariosByID/:id_Co', getComentariosByID)
    app.post('/post/rutasComentario', postRutasComentario)
    app.delete('/delete/comentariosAdmin/:id_CP', decodeUser, deletecomentariosAdmin)
    app.get('/get/comentByID/:id_Co', getcomentByID)
}