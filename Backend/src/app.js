const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
const { createNote, getAllNotes, deleteNote, updateNote } = require('./controllers/notes.controller')

app.post('/notes', createNote) // Creating New Note
app.get('/notes', getAllNotes) // Fetching All Notes
app.delete('/notes/:id', deleteNote) // Deleting a Note
app.put('/notes/:id', updateNote) // Updating a Note

module.exports = app