const noteModel = require("../models/notes.model")

// Creating New Note
const createNote = async (req, res) => {
    const { title, description } = req.body
    const note = await noteModel.create({
        title,
        description
    })
    res.status(201).json({
        message: "Note Created Successfully",
        note
    })
}

// Fetching All Notes
const getAllNotes = async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes
    })
}

// Deleting a Note
const deleteNote = async (req, res) => {
    const id = req.params.id
    const deletedNote = await noteModel.findByIdAndDelete(id, {
        new: true
    })
    res.status(200).json({
        message: "Note Deleted Successfully",
        deletedNote
    })
}

// Updating a Note Field
const updateNote = async (req, res) => {
    const id = req.params.id
    const { title, description } = req.body
    const updatedNote = await noteModel.findByIdAndUpdate(id, {
        $set: {
            title,
            description
        }
    }, {
        new: true
    })
    res.status(200).json({
        message: "Note Updated Successfully",
        updatedNote
    })
}

module.exports = {
    createNote,
    getAllNotes,
    deleteNote,
    updateNote
}