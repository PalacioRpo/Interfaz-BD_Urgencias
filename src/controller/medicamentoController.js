const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
    conn.query('SELECT * FROM medicamento', (err, medicamento) => {
    if (err) {
        res.json(err);
    }
    res.render('medicamento', {
        data: medicamento
    });
    });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    console.log(req.body[0])
    req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO medicamento set ?', [data], (err, medicamento) => {
        console.log(medicamento)
        res.redirect('/medicamento');
    })
    })
};

controller.edit = (req, res) => {
    const { Serial } = req.params;
    req.getConnection((err, conn) => {
    conn.query("SELECT * FROM medicamento WHERE Serial = ?", [Serial], (err, row) => {
        res.render('medicamento_edit', {
        data: row[0]
        })
        console.log(row[0])
    });
    });
};

controller.update = (req, res) => {
    const { Serial } = req.params;
    const newMedicamento = req.body;
    console.log(Serial)
    console.log(newMedicamento)
    req.getConnection((err, conn) => {
    conn.query('UPDATE medicamento set ? where Serial = ?', [newMedicamento, Serial], (err, rows) => {
    res.redirect('/medicamento');
    });
    });
};

controller.delete = (req, res) => {
    const { Serial } = req.params;
    req.getConnection((err, connection) => {
    connection.query('DELETE FROM medicamento WHERE Serial = ?', [Serial], (err, rows) => {
        res.redirect('/medicamento');
    });
    });
};

module.exports = controller;