const Router = require("express");
const router = new Router();

const students = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

router.get('', (req, res) => {
  res.send(students)
})

router.get(':id', (req, res) => {
  const id = parseInt(req.params.id)
  const student = students.find(s => s.id === id)
  if (!student) {
    res.status(404).send('Student not found')
    return
  }
  res.send(student)
})

router.post('', (req, res) => {
  const student = req.body
  students.push(student)
  res.status(201).send(req.body)
})

router.delete(':id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = students.findIndex(s => s.id === id)
  if (index === -1) {
    res.status(404).send('Student not found')
    return
  }
  students.splice(index, 1)
  res.send('Student deleted')
})

router.put(':id', (req, res) => {
  const id = parseInt(req.params.id)
  const student = students.find(s => s.id === id)
  if (!student) {
    res.status(404).send('Student not found')
    return
  }
  student.name = req.body.name
  res.send(student)
})

module.exports = router
