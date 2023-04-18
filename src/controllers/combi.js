import mysqlConection from '../settings/dbConection'

//Mostrará todas las combis que existen el la BDD
export const getCombi = (request, response) => {
    //const dbCombi = mysqlConection()
    mysqlConection.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbCombi.query("select * from combi", (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            //dbCombi.end()
        }
    })
}
//Llamada a la BDD para mostrar todas las combis en la página del admin
export const getadminCombi = (request, response) => {
    const dbadminCombi = mysqlConection()
    dbadminCombi.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbadminCombi.query("select * from combi", (err, result) => {
                if (err) {
                    response.json(err)
                } else {
                    response.json(result)
                }
            })
            //cierra la conexion
            dbadminCombi.end()
        }
    })
}
//----------------------------------------------------------------------------------
//Método POST admin
export const postadminCombi = (request, response) => {
    const dbadminCombi = mysqlConection()
    dbadminCombi.connect((error) => {
        if (error) throw error;
        const { numeroC, nombreC, mapa_link } = request.body;
        if (mapa_link == "" || !mapa_link) {
            return response.json({ status: false, info: "Falta la URL" })
        }
        dbadminCombi.query(
            `INSERT INTO combi(numeroC, nombreC, mapa_link) VALUES(${numeroC}, "${nombreC}", "${mapa_link}")`,
            (err) => {
                if (err) return response.json({ status: false, info: "Combi no insertada", error: err });
                response.json({ status: true, info: 'Combi insertado' });
            });
        dbadminCombi.end((err) => {
            if (err) throw err;
            console.log('Conexión cerrada');
        });
    });
};
//Realizamos un inner join con las id de la combi con respecto a la tabla de Trayecto.
export const getcombisByLugar = (request, response) => {
    const dbadminCombi = mysqlConection()
    dbadminCombi.connect((error) => {
        if (error) {
            response.json(error)
        } else {
            //evalua
            dbadminCombi.query(
                `SELECT * from trayecto t inner join combi c on t.id_combi=c.id_C where id_origen=${request.params.id_origen} and id_destino=${request.params.id_destino};`,
                (err, result) => {
                    if (err) {
                        response.json(err)
                    } else {
                        response.json(result)
                    }
                })
            //cierra la conexion
            dbadminCombi.end()
        }
    })
}
//Delete
export const deleteAdminCombi = (request, response) => {
    const dbConnection = mysqlConection()
    dbConnection.connect((error) => {
        if (error) throw error;
        const { id_C } = request.params
        dbConnection.query(
            ` DELETE FROM combi WHERE id_C=${id_C}`,
            (err) => {
                if (err) return response.json({ status: false, info: 'La combi no se pudo eliminar' })
                response.json({ status: true, info: '¡Combi eliminada!' })
            }
        )
        dbConnection.end()
    })

}
