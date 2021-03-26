const projectModel = require('../Models/projectModel')

module.exports = {
    getAll: function(callback) {
        projectModel.find({}, callback);
    },

    getById: function(projectId, callback) {
        projectModel.findById(projectId, callback)
    },

    create: function(data, callback) {
        const instance = new projectModel(data)
        instance.save(callback)
    },
}
