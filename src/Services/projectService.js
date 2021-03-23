const projectModel = require('../Models/projectModel')

module.exports = {
    getAll: function(callback) {
        projectModel.find({}, callback);
    },

    getById: function(projectId, callback) {
        projectModel.findById(projectId, callback)
    }
}
