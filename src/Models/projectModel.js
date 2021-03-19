const mongoose = require('mongoose')

const ProjectModel = mongoose.model('project', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    release_date: {
        type: Date,
        required: true,
    },
    images: [Buffer]
}));

module.exports = ProjectModel;