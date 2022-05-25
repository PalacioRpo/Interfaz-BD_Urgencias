const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM medico', (err, medico) => {
        if (err) {
            res.json(err);
        }
        res.render('medico', {
            data: medico
        });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO medico set ?', data, (err, medico) => {
        //console.log(medico)
        res.redirect('/medico');
        })
    })
};

controller.edit = (req, res) => {
    const { idMedico } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM medico WHERE idMedico = ?", [idMedico], (err, rows) => {
        res.render('medico_edit', {
            data: rows[0]
        })
        console.log(rows[0])
        });
    });
};

controller.update = (req, res) => {
    const { idMedico } = req.params;
    const newMedico = req.body;
    req.getConnection((err, conn) => {
    conn.query('UPDATE medico set ? where idMedico = ?', [newMedico, idMedico], (err, rows) => {
        res.redirect('/medico');
    });
    });
};

controller.delete = (req, res) => {
    const { idMedico } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM medico WHERE idMedico = ?', [idMedico], (err, rows) => {
        res.redirect('/medico');
        });
    });
}

module.exports = controller;