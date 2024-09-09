const StudentsService = require('../services/students.service')

class StudentsController{
  constructor() {
    this.studentsService = new StudentsService()
  }

  async getStudents(req, res) {
    if (req.query?.name?.length) {
      const students = await this.studentsService.getStudentsByName(req.query.name)
      if (!students.length) {
        res.status(204).send('No students found')
        return
      }
      res.send(students)
      return
    }

    const students = await this.studentsService.getStudents()
    if (!students.length) {
      res.status(204).send('No students found')
      return
    }
    res.send(students)
  }

  async getStudent(req, res) {
    const id = parseInt(req.params.id)
    const student = await this.studentsService.getStudent(id)
    if (!student) {
      res.status(404).send('Student not found')
      return
    }
    res.send(student)
  }

  async createStudent(req, res) {
    const student = req.body
    this.students.push(student)
    res.status(201).send(req.body)
  }

  async deleteStudent(req, res) {
    const id = parseInt(req.params.id)
    const index = await this.studentsService.getStudent(id)
    if (index === -1) {
      res.status(404).send('Student not found')
      return
    }
    await this.studentsService.deleteStudent(id)
    res.send('Student deleted')
  }

  async updateStudent(req, res) {
    const id = parseInt(req.params.id)
    const student = await this.studentsService.getStudent(id)
    if (!student) {
      res.status(404).send('Student not found')
      return
    }
    await this.studentsService.updateStudent(id, req.body)
    res.send(student)
  }
}

module.exports = StudentsController
