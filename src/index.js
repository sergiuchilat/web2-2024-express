const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const students = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

app.get('/students', (req, res) => {
  res.send(students)
})

app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const student = students.find(s => s.id === id)
  if (!student) {
    res.status(404).send('Student not found')
    return
  }
  res.send(student)
})

app.post('/students', (req, res) => {
  const student = req.body
  students.push(student)
  res.status(201).send(req.body)
})

app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = students.findIndex(s => s.id === id)
  if (index === -1) {
    res.status(404).send('Student not found')
    return
  }
  students.splice(index, 1)
  res.send('Student deleted')
})

app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const student = students.find(s => s.id === id)
  if (!student) {
    res.status(404).send('Student not found')
    return
  }
  student.name = req.body.name
  res.send(student)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
