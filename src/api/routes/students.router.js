const Router = require("express");
const router = new Router();
const StudentsController = require('../controllers/students.controller')
const studentsController = new StudentsController()

router.get('', (req, res) => studentsController.getStudents(req, res))
router.get('/:id', (req, res) => studentsController.getStudent(req, res))
router.post('', (req, res) => { studentsController.createStudent(req, res) })
router.delete('/:id', (req, res) => studentsController.deleteStudent(req, res))
router.put('/:id', (req, res) => studentsController.updateStudent(req, res))

module.exports = router
