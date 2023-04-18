import { getadminCombiTrayecto, getadminLugarDestino, getadminLugarOrigen, postadminTrayecto, getadminIDtrayecto, deleteAdminTrayecto } from "../controllers/trayecto";
import decodeUser from "../middlewares/decodeUser"

module.exports = (app) => {
    app.post('/post/adminTrayecto', decodeUser, postadminTrayecto)
    app.get('/get/adminLugar/Origen', getadminLugarOrigen)
    app.get('/get/adminLugar/Destino', getadminLugarDestino)
    app.get('/get/adminCombi/Trayecto', getadminCombiTrayecto)
    app.get('/get/adminIDtrayecto/all', getadminIDtrayecto)
    app.delete('/delete/adminTrayecto/:id', decodeUser, deleteAdminTrayecto)
}