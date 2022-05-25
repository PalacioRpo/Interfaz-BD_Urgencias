const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM enfermero', (err, enfermero) => {
        if (err) {
            res.json(err);
        }
        res.render('enfermero', {
            data: enfermero
        });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO enfermero set ?', data, (err, enfermero) => {
        //console.log(enfermero)
        res.redirect('/enfermero');
        })
    })
};

controller.edit = (req, res) => {
    const { idEnfermero } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM enfermero WHERE idEnfermero = ?", [idEnfermero], (err, rows) => {
        res.render('enfermero_edit', {
            data: rows[0]
        })
        console.log(rows[0])
        });
    });
};

controller.update = (req, res) => {
    const { idEnfermero } = req.params;
    const newEnfermero = req.body;
    req.getConnection((err, conn) => {
    conn.query('UPDATE enfermero set ? where idEnfermero = ?', [newEnfermero, idEnfermero], (err, rows) => {
        res.redirect('/enfermero');
    });
    });
};

controller.delete = (req, res) => {
    const { idEnfermero } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM enfermero WHERE idEnfermero = ?', [idEnfermero], (err, rows) => {
        res.redirect('/enfermero');
        });
    });
}

module.exports = controller;