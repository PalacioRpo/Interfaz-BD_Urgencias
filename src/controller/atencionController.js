const { redirect } = require("express/lib/response");

const controller = {}; 

//// select nombre from paciente p join registroIngreso r on (p.idPaciente=r.Paciente_idPAciente) join atencionPaciente a on (r.idRegistro=a.RegistroIngreso_idRegistro)


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
    conn.query('SELECT * FROM atencionpaciente', (err, atencion) => {
    if (err) {
        res.json(err);
    }
    res.render('atencion', {
        data: atencion
    });
    });
    });
};

controller.listmedicos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM medico', (err, atencion) => {
        if (err) {
            res.json(err);
        }
        res.render('tablamedico', {
            data: atencion
        });
        });
        });
};

controller.listenfermeros = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM enfermero', (err, atencion) => {
            if (err) {
                res.json(err);
            }
            res.render('tablaenfermero', {
                data: atencion
            });
        });
    });
};

controller.listmedicamentos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM medicamento', (err, atencion) => {
            if (err) {
                res.json(err);
            }
            res.render('tablamedicamento', {
                data: atencion
            });
        });
    });
};

//acá en save quiero ver si cogiendo el valor en la posicion de estado y luego dandole con un if, podría ver si hacia un query para cambiar el de cubiculo
controller.save = (req, res) => {
    const data = req.body;
    //const { RegistroIngreso_idRegistro } = req.params;
        req.getConnection((err, connection) => {
            const query1 = connection.query('INSERT INTO atencionpaciente set ?', [data], (err, atencion) => {
                //res.redirect('/updatecubiculo');
            })
            if(data["Estado"] == "EnAtencion"){
            connection.query("select * from cubiculo c join registroingreso ri on( c.Numero = ri.Cubiculo_Numero) join atencionpaciente a on (ri.idRegistro = ?)", [data["RegistroIngreso_idRegistro"]], (err, row) => {
                res.render('cubiculo_update', {
                data: row[0]
                })
                console.log(row[0])
            });
            }
            else{
                res.redirect('/updatecubiculo');
            }
            })
};

//controller.editc = (req, res) => {
//    const { RegistroIngreso_idRegistro } = req.params;
//    req.getConnection((err, conn) => {
//        conn.query("select Numero from cubiculo c join registroingreso ri on( c.Numero = ri.Cubiculo_Numero) join atencionpaciente a on (ri.idRegistro = ?)", [RegistroIngreso_idRegistro], (err, row) => {
//        res.render('cubiculo_update', {
//        data: row[0]
//        })
//        console.log(row[0])
//    });
//    });
//};

controller.updatec = (req, res) => {
    const data = req.body;
    const { Numero } = req.params;
    const newCubiculo = req.body;
    console.log(Numero)
    console.log(newCubiculo)
    req.getConnection((err, conn) => {
    conn.query('UPDATE cubiculo as c set ? where c.Numero = ?', [newCubiculo, Numero], (err, rows) => {
        res.redirect("/atencion");
    });
    });
};

controller.edit = (req, res) => {
    const { idAtencionPaciente } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM atencionpaciente WHERE idAtencionPaciente = ?", [idAtencionPaciente], (err, row) => {
        res.render('atencion_edit', {
        data: row[0]
        })
        console.log(row[0])
    });
    });
};

controller.update = (req, res) => {
    const { idAtencionPaciente } = req.params;
    const newAtencion = req.body;
    console.log(idAtencionPaciente)
    console.log(newAtencion)
    req.getConnection((err, conn) => {
        conn.query('UPDATE atencionpaciente set ? where idAtencionPaciente = ?', [newAtencion, idAtencionPaciente], (err, rows) => {
    res.redirect('/atencion');
    });
    });
};

controller.delete = (req, res) => {
    const { idAtencionPaciente } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM atencionpaciente WHERE idAtencionPaciente = ?', [idAtencionPaciente], (err, rows) => {
        res.redirect('/atencion');
    });
    });
};

module.exports = controller;