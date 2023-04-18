import mysqlConection from '../settings/dbConection'

//Mostrar los lugares de la categoria origen
export const getLugarOrigen = (request, response) => {
    const dbLugarOrigen = mysqlConection()
    dbLugarOrigen.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbLugarOrigen.query("select * from lugar where tipo like 'O' order by nombre asc", (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbLugarOrigen.end()
        }
    })
}
//Mostrar los lugares de la categoria destino
export const getLugarDestino = (request, response) => {
    const dbLugarDestino = mysqlConection()
    dbLugarDestino.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbLugarDestino.query("select * from lugar where tipo like 'D' order by nombre asc", (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbLugarDestino.end()
        }
    })
}
//Mostrará los lugares de las páginas de usuario
export const getadminLugar = (request, response) => {
    const dbadminLugar = mysqlConection()
    dbadminLugar.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbadminLugar.query("select * from lugar", (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbadminLugar.end()
        }
    })
}
//----------------------------------------------------------------------------------
//Método POST admin
export const postadminLugar = (request, response) => {
    const dbadminLugar = mysqlConection()
    dbadminLugar.connect((error) => {
        if (error) throw error;
        const { nombre, tipo } = request.body;
        dbadminLugar.query(
            `INSERT INTO lugar(nombre, tipo) VALUES("${nombre}", "${tipo}")`,
            (err) => {
                if (err) console.log(err);
                response.json('Lugar insertado');
            });
        dbadminLugar.end((err) => {
            if (err) throw err;
            console.log('Conexión cerrada');
        });
    });
};
//Delete
export const deleteAdminLugar = (request, response) => {
    const dbConnection = mysqlConection()
    dbConnection.connect((error) => {
        if (error) throw error;
        const { id_L } = request.params
        dbConnection.query(
            ` DELETE FROM lugar WHERE id_L=${id_L}`,
            (err) => {
                if (err) return response.json({ status: false, info: 'El lugar no se pudo eliminar' })
                response.json({ status: true, info: '¡Lugar eliminado!' })
            }
        )
        dbConnection.end()
    })

}

