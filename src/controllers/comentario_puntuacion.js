import mysqlConection from '../settings/dbConection'

//Llamada a la BDD para mostrar todas las combis en la página del admin de valoraciones
export const getadminCombiValoracion = (request, response) => {
    const dbadminCombiValoracion = mysqlConection()
    dbadminCombiValoracion.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbadminCombiValoracion.query("select * from combi", (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbadminCombiValoracion.end()
        }
    })
}
//Muestra todos los comentarios en la pagina del admin
export const getComentarios = (request, response) => {
    const dbComentarios = mysqlConection()
    dbComentarios.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbComentarios.query("select * from comentario_puntuacion", (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbComentarios.end()
        }
    })
}
//traerá comentarios de acuerdo del ID con respecto a params
export const getComentariosByID = (request, response) => {
    const dbComentarios = mysqlConection()
    dbComentarios.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbComentarios.query(`select * from comentario_puntuacion WHERE id_Co = ${request.params.id_Co}`, (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbComentarios.end()
        }
    })
}
//------------------------------------------------------------------------------------------------
//Metodo POST
export const postRutasComentario = (request, response) => {
    const dbRutasComentario = mysqlConection()
    dbRutasComentario.connect((error) => {
        if (error) throw error;
        const { id_Co, nombre_per, comentario } = request.body;
        dbRutasComentario.query(
            `INSERT INTO comentario_puntuacion(id_Co, nombre_per, comentario) VALUES(${id_Co} ,"${nombre_per}", "${comentario}")`,
            (err) => {
                if (err) return response.json({status: false, info:"¡Caracteres no válidos!", error:err});
                response.json({status: true, info:'Comentario agregado'});
            });
        dbRutasComentario.end((err) => {
            if (err) throw err;
            console.log('Conexión cerrada');
        });
    });
};
//Metodo DELETE por medio de params del ID en la página del admin
export const deletecomentariosAdmin = (request, response) => {
    const dbcomentariosAdmin = mysqlConection()
    dbcomentariosAdmin.connect((error) => {
        if (error) throw error;
        const id_CP = request.params.id_CP
        dbcomentariosAdmin.query(
            `DELETE FROM comentario_puntuacion WHERE id_CP = ${id_CP}`,
            (err) => {
                if (err) console.log(err);
                response.json({ status: true, info: 'Comentario eliminado' });
            });
        dbcomentariosAdmin.end((err) => {
            if (err) throw err;
            console.log('Conexión cerrada');
        });
    });
};
//Realizamos un inner join con las id de la combi con respecto a la tabla de Trayecto.
export const getcomentByID = (request, response) => {
    const dbConnection = mysqlConection()
    dbConnection.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbConnection.query(
                `select * from comentario_puntuacion WHERE id_Co = ${request.params.id_Co}`,
                (err, result) => {
                    if (err) {
                        response.json(err)
                    } else {
                        response.json(result)
                    }
                })
            //cierra la conexion
            dbConnection.end()
        }
    })
}