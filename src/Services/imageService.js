const imageModel = require('../Models/imageModel')
const fs = require('fs')

module.exports = {
    getAll: function(callback) {
        imageModel.find({}, callback);
    },

    getById: function(imageId, callback) {
        imageModel.findById(imageId, callback)
    },

    create: function(data, callback) {
        fs.readFile('../../assets/introduction-image-big.jpg', (err, result) => {
            if (err) {
                console.error(err)
                return
            }

            data.content = result
            data.contentType = 'image/jpg'
            
            const instance = new imageModel(data)
            instance.save(callback)
        })
    },
}
