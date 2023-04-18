import { getMapa, getnombreMapa } from "../controllers/mapa";

module.exports = (app)=>{
    app.get('/get/mapa/all/:id_C', getMapa)
    app.get('/get/nombreMapa/:id_C', getnombreMapa)
}