class StudentsRepository{
  constructor() {
    this.students = [
      { id: 1, name: 'Andrei Ciobanu' },
      { id: 2, name: 'Ion Creanga' },
      { id: 3, name: 'Mihai Eminescu' },
      { id: 4, name: 'George Enescu' },
      { id: 5, name: 'Ion Placinta' },
      { id: 6, name: 'Semion Puscasu'}
    ]
  }

  async getStudents() {
    return this.students
  }

  async createStudent(student) {
    this.students.push(student)
    return student
  }

  async deleteStudent(id) {
    const index = this.students.findIndex(s => s.id === id)
    if (index === -1) {
      return null
    }
    this.students.splice(index, 1)
    return 'Student deleted'
  }

  async updateStudent(id, studentPayload) {
    const student = this.students.find(s => s.id === id)
    if (!student) {
      return null
    }
    student.name = studentPayload.name
    return student
  }
}

module.exports = StudentsRepository
