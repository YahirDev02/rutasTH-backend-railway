import { getadminCombi, getCombi, getcombisByLugar, postadminCombi, deleteAdminCombi } from "../controllers/combi";
import decodeUser from "../middlewares/decodeUser"

module.exports = (app) => {
    app.get('/get/combi/all', getCombi)
    app.get('/get/adminCombi', getadminCombi)
    app.post('/post/postadminCombi', decodeUser, postadminCombi)
    app.get('/get/combiByLugar/:id_origen/:id_destino', getcombisByLugar)
    app.delete('/delete/adminCombi/:id_C', decodeUser, deleteAdminCombi)
}