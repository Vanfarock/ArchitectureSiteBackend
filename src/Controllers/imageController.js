const imageService = require('../Services/imageService')

module.exports = {
    imageList: function(req, res) {
        imageService.getAll(function(err, data) {
            if (err) {
                res.status(500).send(err)
            }
            else {
                res.send(data)
            }
        })
    },

    imageDetail: function(req, res) {
        const imageId = req.params['imageId']
        
        imageService.getById(imageId, function(err, data) {
            if (err) {
                console.error(err)
                res.status(500).send(err)
            }
            else {
                res.send(data)
            }
        })
    },

    createImage: function(req, res) {
        imageService.create(req.body, function(err) {
            if (err) {
                console.error(err)
                res.status(500).send(err)
            }
            else {
                res.json({})
            }
        })
    },
}