const StudentsRepository = require('../repositories/students.repository')

class StudentsService{
  constructor() {
    this.studentsRepository = new StudentsRepository()
  }

  async getStudents() {
    return this.studentsRepository.getStudents()
  }

  async getStudent(id) {
    return (await this.studentsRepository.getStudents()).find(s => s.id === id)
  }

  async createStudent(student) {
    return await this.studentsRepository.createStudent(student)
  }

  async deleteStudent(id) {
    const index = (await this.studentsRepository.getStudents()).findIndex(s => s.id === id)
    if (index === -1) {
      return null
    }
    await this.studentsRepository.deleteStudent(id)
    return 'Student deleted'
  }

  async updateStudent(id, studentPayload) {
    const student = (await this.studentsRepository.getStudents()).find(s => s.id === id)
    if (!student) {
      return null
    }
    await this.studentsRepository.updateStudent(id, studentPayload)
    return student
  }

  async getStudentsByName(name) {
    return (await this.studentsRepository.getStudents()).filter(s => s.name.includes(name))
  }
}

module.exports = StudentsService
