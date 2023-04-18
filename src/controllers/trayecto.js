import mysqlConection from '../settings/dbConection'

//Mostrar los lugares de la categoria origen
export const getadminLugarOrigen = (request, response) => {
    const dbadminLugarOrigen = mysqlConection()
    dbadminLugarOrigen.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbadminLugarOrigen.query("select * from lugar where tipo like 'O' order by Nombre asc", (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbadminLugarOrigen.end()
        }
    })
}
//Mostrar los lugares de la categoria destino
export const getadminLugarDestino = (request, response) => {
    const dbadminLugarDestino = mysqlConection()
    dbadminLugarDestino.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbadminLugarDestino.query("select * from lugar where tipo like 'D' order by Nombre asc", (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbadminLugarDestino.end()
        }
    })
}
//llama a todas las combis
export const getadminCombiTrayecto = (request, response) => {
    const dbadminCombiTrayecto = mysqlConection()
    dbadminCombiTrayecto.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbadminCombiTrayecto.query("select * from combi", (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbadminCombiTrayecto.end()
        }
    })
}
//----------------------------------------------------------------------------------
//Método POST admin
export const postadminTrayecto = (request, response) => {
    const dbadminTrayecto = mysqlConection()
    dbadminTrayecto.connect((error) => {
        if (error) throw error;
        const { id_origen, id_destino, id_combi } = request.body;
        dbadminTrayecto.query(
            `INSERT INTO trayecto(id_origen, id_destino, id_combi) VALUES(${id_origen}, ${id_destino}, ${id_combi})`,
            (err) => {
                if (err) console.log(err);
                response.json('Trayectoria insertada');
            });
        dbadminTrayecto.end((err) => {
            if (err) throw err;
            console.log('Conexión cerrada');
        });
    });
};
//llama a todas la relacion entre lugares y las combis por medio de las ID por las params
export const getadminIDtrayecto = (request, response) => {
    const dbadminIDtrayecto = mysqlConection()
    dbadminIDtrayecto.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbadminIDtrayecto.query("select l1.Nombre as origen, l2.Nombre as destino, c.NumeroC as numC, c.NombreC as nombreC, t.id as id from trayecto t inner join lugar l1 on l1.id_L=t.id_origen inner join lugar l2 on l2.id_L=t.id_destino inner join combi c on c.id_C= t.id_combi order by id  desc limit 15",
                (err, result) => {
                    if (err) {
                        response.json(err)
                    } else {
                        response.json(result)
                    }
                })
            //cierra la conexion
            dbadminIDtrayecto.end()
        }
    })
}
//Delete
export const deleteAdminTrayecto = (request, response) => {
    const dbConnection = mysqlConection()
    dbConnection.connect((error) => {
        if (error) throw error;
        const { id } = request.params
        dbConnection.query(
            ` DELETE FROM trayecto WHERE id=${id}`,
            (err) => {
                if (err) return response.json({ status: false, info: 'El trayecto no se pudo eliminar', error: err })
                response.json({ status: true, info: '¡Trayecto eliminado!' })
            }
        )
        dbConnection.end()
    })

}