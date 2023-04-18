import { getadminLugar, getLugarOrigen, getLugarDestino, postadminLugar, deleteAdminLugar } from "../controllers/lugar";
import decodeUser from "../middlewares/decodeUser"

module.exports = (app) => {
    app.get('/get/lugarOrigen', getLugarOrigen)
    app.get('/get/lugarDestino', getLugarDestino)
    app.get('/get/adminLugar', getadminLugar)
    app.post('/post/postadminLugar', decodeUser, postadminLugar)
    app.delete('/delete/adminLugar/:id_L', decodeUser, deleteAdminLugar)
}