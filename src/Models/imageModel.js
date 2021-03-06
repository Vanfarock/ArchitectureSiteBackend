const mongoose = require('mongoose')

const ImageModel = mongoose.model('image', new mongoose.Schema({    
    description: {
        type: String,
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    content: {
        type: Buffer,
        required: true,
    },
    contentType: {
        type: String,
        required: true
    }
}));

module.exports = ImageModel;