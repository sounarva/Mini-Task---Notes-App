import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Slide, toast } from 'react-toastify'
import { NotesContext } from '../Context/NotesContext'

const EditNoteModal = ({ setEditModalOpen, note }) => {
    const [title, setTitle] = useState(note.title)
    const [description, setDescription] = useState(note.description)
    const URI = import.meta.env.VITE_BACKEND_URL
    const { setNotes } = useContext(NotesContext)
    async function updateNote() {
        toast.info('Note Updated Successfully', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
        });
        const response = await axios.put(`${URI}/notes/${note._id}`, {
            title,
            description
        })
        setNotes((prevNotes) => prevNotes.map(note => note._id === response.data.updatedNote._id ? response.data.updatedNote : note))
        setEditModalOpen(false)
    }
    return (
        <div className='w-full h-full bg-black/50 fixed top-0 left-0 flex items-center justify-center'>
            <div className='w-[500px] px-5 py-5 bg-zinc-900 rounded-lg border-2 border-zinc-500'>
                <h2 className='text-2xl font-bold text-white'>Edit Note</h2>
                <div className='flex flex-col gap-5 mt-5'>
                    <input value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        type="text" placeholder='Enter a title' className='w-full px-3 py-2 bg-zinc-800 rounded-lg border-2 border-zinc-500 text-white' />
                    <input value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        type="text" placeholder='Enter a description' className='w-full px-3 py-2 bg-zinc-800 rounded-lg border-2 border-zinc-500 text-white' />
                </div>
                <div className='w-full flex items-center justify-between mt-5'>
                    <button onClick={() => {
                        updateNote()
                    }} className='createNoteBtn text-lg px-5 py-2 bg-blue-500 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-400 transition-all duration-200 mt-5'>Update Note</button>

                    <button onClick={() => {
                        setEditModalOpen(false)
                    }} className='createNoteBtn text-lg px-5 py-2 bg-red-500 rounded-lg text-white font-bold cursor-pointer hover:bg-red-400 transition-all duration-200 mt-5'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditNoteModal