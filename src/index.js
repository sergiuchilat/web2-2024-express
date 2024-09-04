const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const Router = require('express')
const router = new Router();

app.use(bodyParser.json())

router.use('/students', require('./api/routes/students'))
router.use('/teachers', require('./api/routes/teachers'))

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
