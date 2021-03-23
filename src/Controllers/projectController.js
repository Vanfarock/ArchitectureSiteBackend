const projectService = require('../Services/projectService')

module.exports = {
    projectList: function(req, res) {
        projectService.getAll(function(err, data) {
            if (err) {
                res.status(400).send(err.errors)
            }
            else {
                res.send(data)
            }
        })
    },

    projectDetail: function(req, res) {
        const projectId = req.params['projectId']

        projectService.getById(projectId, function(err, data) {
            if (err) {
                res.status(400).send(err.errors)
            }
            else {
                res.send(data)
            }
        })
    }
}