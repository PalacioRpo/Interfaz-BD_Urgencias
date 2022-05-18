const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM paciente', (err, paciente) => {
        if (err) {
            res.json(err);
        }
        res.render('paciente', {
            data: paciente
        });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO paciente set ?', data, (err, paciente) => {
        console.log(paciente)
        res.redirect('/paciente');
        })
    })
};

controller.edit = (req, res) => {
    const { idPaciente } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM paciente WHERE idPaciente = ?", [idPaciente], (err, rows) => {
        res.render('paciente_edit', {
            data: rows[0]
        })
        console.log(rows[0])
        });
    });
};

controller.update = (req, res) => {
    const { idPaciente } = req.params;
    const newPaciente = req.body;
    req.getConnection((err, conn) => {
    conn.query('UPDATE paciente set ? where idPaciente = ?', [newPaciente, idPaciente], (err, rows) => {
        res.redirect('/paciente');
    });
    });
};

controller.delete = (req, res) => {
    const { idPaciente } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM paciente WHERE idPaciente = ?', [idPaciente], (err, rows) => {
        res.redirect('/paciente');
        });
    });
}

module.exports = controller;