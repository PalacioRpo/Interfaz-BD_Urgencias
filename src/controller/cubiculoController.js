const controller = {}; 

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
    conn.query('SELECT * FROM cubiculo', (err, cubiculo) => {
    if (err) {
        res.json(err);
    }
    res.render('cubiculo', {
        data: cubiculo
    });
    });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO cubiculo set ?', [data], (err, cubiculo) => {
        console.log(cubiculo)
        res.redirect('/');
    })
    })
};

controller.edit = (req, res) => {
    const { Numero } = req.params;
    req.getConnection((err, conn) => {
    conn.query("SELECT * FROM cubiculo WHERE Numero = ?", [Numero], (err, row) => {
        res.render('edit', {
        data: row[0]
        })
        console.log(row[0])
    });
    });
};

controller.update = (req, res) => {
    const { Numero } = req.params;
    const newCubiculo = req.body;
    console.log(Numero)
    console.log(newCubiculo)
    req.getConnection((err, conn) => {
    conn.query('UPDATE cubiculo set ? where Numero = ?', [newCubiculo, Numero], (err, rows) => {
    res.redirect('/');
    });
    });
};

controller.delete = (req, res) => {
    const { Numero } = req.params;
    req.getConnection((err, connection) => {
    connection.query('DELETE FROM cubiculo WHERE Numero = ?', [Numero], (err, rows) => {
        res.redirect('/');
    });
    });
};

module.exports = controller;