const heroeController = {
    detalle: function (req, res) {
        let id = req.params.id;
        res.send('detalle del heroe del id ' + id)
    }


}

module.exports= heroeController;