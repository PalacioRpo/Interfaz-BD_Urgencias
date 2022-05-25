const controller = {}; 


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
    conn.query('SELECT * FROM registroingreso', (err, registro) => {
    if (err) {
        res.json(err);
    }
    res.render('registro', {
        data: registro
    });
    });
    });
};

controller.consultpaciente = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT idPaciente FROM paciente', (err, paciente) => {
            if (err) {
                res.json(err);
            }
            res.render('registropaciente', {
                data: paciente
            });
        });
    });
};

controller.listpaciente = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM paciente', (err, registro) => {
        if (err) {
            res.json(err);
        }
        res.render('tablapaciente', {
            data: registro
        });
        });
        });
};

controller.listcubiculos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cubiculo WHERE Estado = "Disponible"', (err, registro) => {
        if (err) {
            res.json(err);
        }
        res.render('tablacubiculo', {
            data: registro
        });
        });
        });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO registroingreso set ?', [data], (err, registro) => {
        console.log(registro)
        res.redirect('/registro');
    })
    })
};

controller.edit = (req, res) => {
    const { idRegistro } = req.params;
    req.getConnection((err, conn) => {
    conn.query("SELECT * FROM registroingreso WHERE idRegistro = ?", [idRegistro], (err, row) => {
        res.render('registro_edit', {
        data: row[0]
        })
        console.log(row[0])
    });
    });
};

controller.update = (req, res) => {
    const { idRegistro } = req.params;
    const newRegistro = req.body;
    console.log(idRegistro)
    console.log(newRegistro)
    req.getConnection((err, conn) => {
    conn.query('UPDATE registroingreso set ? where idRegistro = ?', [newRegistro, idRegistro], (err, rows) => {
    res.redirect('/registro');
    });
    });
};

/*controller.delete = (req, res) => {
    const { idRegistro } = req.params;
    req.getConnection((err, connection) => {
    connection.query('DELETE FROM registroingreso WHERE idRegistro = ?', [idRegistro], (err, rows) => {
        res.redirect('/');
    });
    });
};*/

module.exports = controller;