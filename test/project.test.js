const expect = require('chai').expect
const sinon = require('sinon')

const ProjectModel = require('../src/Models/projectModel')
const projectService = require('../src/Services/projectService')

describe('project', function() {
    describe('model', function() {
        const model = new ProjectModel()

        it('should throw an error if name is empty', function(done) {
            model.validate(function(err) {
                expect(err.errors.name).to.exist
                done()
            })
        })

        it('should throw an error if releaseDate is empty', function(done) {
            model.validate(function(err) {
                expect(err.errors.releaseDate).to.exist
                done()
            })
        })
    })

    describe('methods', function() {
        const expectedResult = [{
            'images': [],
            '_id': '6053ec5431c0f73344aacc73',
            'name': 'Test project',
            'release_date': '2021-03-19T00:12:04.229Z',
            '__v': 0
        },
        {
            'images': [],
            '_id': '6053ec72cf8da034183f6df5',
            'name': 'Test project',
            'release_date': '2021-03-19T00:12:34.931Z',
            '__v': 0
        },
        {
            'images': [],
            '_id': '6053ec9086413e1c2090470c',
            'name': 'Test project',
            'release_date': '2021-03-19T00:13:04.383Z',
            '__v': 0
        }]

        it('should return all projects', function(done) {
            sinon.stub(projectService, 'getAll')

            projectService.getAll.yields(null, expectedResult)
    
            projectService.getAll(function(err, res) {
                expect(res).to.be.equal(expectedResult)
                done()
            })
        })

        it('should return given project', function(done) {
            sinon.stub(projectService, 'getById')

            const project = expectedResult[0];
            
            projectService.getById.yields(null, project)

            projectService.getById(project._id, function(err, res) {
                expect(res).to.be.equal(project)
                done()
            })
        })
    })

    describe('controllers', function() {
        const controller = require('../src/Controllers/projectController')
        
        const mockedResult = [{
            'images': [],
            '_id': '6053ec5431c0f73344aacc73',
            'name': 'Test project',
            'release_date': '2021-03-19T00:12:04.229Z',
            '__v': 0
        },
        {
            'images': [],
            '_id': '6053ec72cf8da034183f6df5',
            'name': 'Test project',
            'release_date': '2021-03-19T00:12:34.931Z',
            '__v': 0
        },
        {
            'images': [],
            '_id': '6053ec9086413e1c2090470c',
            'name': 'Test project',
            'release_date': '2021-03-19T00:13:04.383Z',
            '__v': 0
        }]

        it('should send all projects', function(done) {
            projectService.getAll.yields(null, mockedResult)

            const req = { params: {} }
            const res = {
                send: sinon.stub()
            }
            
            controller.projectList(req, res)

            sinon.assert.calledWith(res.send, mockedResult)
            sinon.assert.calledOnce(res.send)
            done()
        })

        it('should send given project', function(done) {
            const project = mockedResult[0];
            
            projectService.getById.yields(null, project)

            const req = { params: { projectId: project._id } }
            const res = {
                send: sinon.stub()
            }

            controller.projectDetail(req, res)

            sinon.assert.calledWith(res.send, project)
            sinon.assert.calledOnce(res.send)
            done()
        })
    })
})