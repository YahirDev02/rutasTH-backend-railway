//importacion del sevidor
import app from "./settings/config"
//conecion a la bd
import routes_trayecto from "./routes/trayecto"
import routes_combi from "./routes/combi"
import routes_lugar from "./routes/lugar"
import routes_mapa from "./routes/mapa"
import routes_comentarios from "./routes/comentario_puntuacion"
import routes_administrador from "./routes/administrador"
routes_administrador(app)
routes_comentarios(app)
routes_mapa(app)
routes_lugar(app)
routes_combi(app)
routes_trayecto(app)
app.listen(app.get("port"), ()=>{
    console.log("servidor en puerto: ", app.get("port"))
})