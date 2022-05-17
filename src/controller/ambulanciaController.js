const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ambulancia', (err, ambulancia) => {
        if (err) {
            res.json(err);
        }
        res.render('ambulancia', {
            data: ambulancia
        });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO ambulancia set ?', data, (err, ambulancia) => {
        console.log(ambulancia)
        res.redirect('/');
        })
    })
};

controller.edit = (req, res) => {
    const { idAmbulancia } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM ambulancia WHERE idAmbulancia = ?", [idAmbulancia], (err, rows) => {
        res.render('ambulancia_edit', {
            data: rows[0]
        })
        console.log(rows[0])
        });
    });
};

controller.update = (req, res) => {
    const { idAmbulancia } = req.params;
    const newAmbulancia = req.body;
    req.getConnection((err, conn) => {
    conn.query('UPDATE ambulancia set ? where idAmbulancia = ?', [newAmbulancia, idAmbulancia], (err, rows) => {
        res.redirect('/');
    });
    });
};

controller.delete = (req, res) => {
    const { idAmbulancia } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM ambulancia WHERE idAmbulancia = ?', [idAmbulancia], (err, rows) => {
        res.redirect('/');
        });
    });
}

module.exports = controller;