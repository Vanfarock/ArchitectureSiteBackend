const projectService = require('../Services/projectService')

module.exports = {
    projectList: function(req, res) {
        projectService.getAll(function(err, data) {
            if (err) {
                res.status(500).send(err)
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
                console.error(err)
                res.status(500).send(err)
            }
            else {
                res.send(data)
            }
        })
    },

    createProject: function(req, res) {
        projectService.create(req.body, function(err) {
            if (err) {
                console.error(err)
                res.status(500).send(err)
            } else {
                res.status(200).json({})
            }
        })
    },
}