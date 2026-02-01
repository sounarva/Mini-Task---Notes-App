const mongoose = require('mongoose')

const notesScheme = new mongoose.Schema({
    title: String,
    description: String
})


// Collection/Model Creation
const noteModel = mongoose.model('notes', notesScheme)
module.exports = noteModel