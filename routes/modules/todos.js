const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo

// render create page
router.get('/new', (req, res) => {
  return res.render('new')
})

// CREATE: create a new todo to database
router.post('/', (req, res) => {
  const UserId = req.user.id
  const { name } = req.body

  return Todo.create({ name, UserId })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// READ: find a todo and render detail page
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

module.exports = router
