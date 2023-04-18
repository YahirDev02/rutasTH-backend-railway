//Esta sección va en la pagina rutas de la página principal.
import mysqlConection from '../settings/dbConection'
//Este proceso se reflejará en la página del frontend de la sección de rutas    onclick="getRutaMapa(mostrarRL)"

//Aquí traera los url de los mapas de acuerdo a las combis
export const getMapa = (request, response) =>{
    const dbMapa = mysqlConection()
    dbMapa.connect((error)=>{ 
        if (error){
            response.json(error)
        } else {
            //evalua
            dbMapa.query(`select * from combi WHERE id_C=${request.params.id_C}`, (err, result)=>{
                if (err){
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbMapa.end()
        }
    })
}
//Aquí traera el nombre de los mapas de acuerdo a las combis del INDEX
export const getnombreMapa = (request, response) =>{
    const dbnombreMapa = mysqlConection()
    dbnombreMapa.connect((error)=>{ 
        if (error){
            response.json(error)
        } else {
            //evalua
            dbnombreMapa.query(`select * from combi WHERE id_C=${request.params.id_C}`, (err, result)=>{
                if (err){
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbnombreMapa.end()
        }
    })
}