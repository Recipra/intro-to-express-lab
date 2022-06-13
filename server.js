import express from 'express'

import { students } from './data/students-data.js'

const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.redirect('/students')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/students', function(req, res) {
  res.render('students/index', {students})
})



app.listen(3000, function() {
  console.log('Listening on port 3000')
})