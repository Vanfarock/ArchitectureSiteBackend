const mongoose = require('mongoose')

const ProjectModel = mongoose.model('project', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    images: [Buffer]
}));

module.exports = ProjectModel;