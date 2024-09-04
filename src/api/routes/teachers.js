const Router = require("express");
const router = new Router();

const teachers = [
  { id: 1, name: 'Andrei Ciobanu' },
  { id: 2, name: 'Ion Creanga' },
];


router.get('', (req, res) => {
  res.send(teachers)
})

router.get(':id', (req, res) => {
  const id = parseInt(req.params.id)
  const teacher = teachers.find(s => s.id === id)
  if (!teacher) {
    res.status(404).send('Teacher not found')
    return
  }
  res.send(teacher)
})

router.post('', (req, res) => {
  const teacher = req.body
  students.push(teacher)
  res.status(201).send(req.body)
})

router.delete(':id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = teachers.findIndex(s => s.id === id)
  if (index === -1) {
    res.status(404).send('Teacher not found')
    return
  }
  teachers.splice(index, 1)
  res.send('Teacher deleted')
})

router.put(':id', (req, res) => {
  const id = parseInt(req.params.id)
  const teacher = teachers.find(s => s.id === id)
  if (!teacher) {
    res.status(404).send('Teacher not found')
    return
  }
  teacher.name = req.body.name
  res.send(teacher)
})

module.exports = router
