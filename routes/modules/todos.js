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

// render edit page
router.get('/:id/edit', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({ where: { id, UserId } })
    .then(todo => res.render('edit', { todo: todo.toJSON() })
    )
    .catch(err => console.log(err))
})

// UPDATE: find a todo, edit, and save it
router.put('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  const { name, isDone } = req.body
  return Todo.update({ name, isDone: (isDone === 'on') }, { where: { id, UserId } })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(err => console.log(err))
})

// DELETE: find a todo and delete it
router.delete('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.destroy({ where: { id, UserId } })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router
