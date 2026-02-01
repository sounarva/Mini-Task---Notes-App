import { useContext, useState } from 'react'
import EditNoteModal from './EditNoteModal'
import axios from 'axios'
import { NotesContext } from '../Context/NotesContext'
import { Slide, toast } from 'react-toastify'

const Notes = () => {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [note, setNote] = useState({})
    const { notes } = useContext(NotesContext)
    const URI = import.meta.env.VITE_BACKEND_URL


    function editNote(note) {
        setEditModalOpen(true)
        setNote(note)
    }

    async function deleteNote(id) {
        toast.error('Note Deleted Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
        });
        await axios.delete(`${URI}/notes/${id}`)
    }

    return (
        <div className='notes w-full px-10 py-6 flex items-center gap-5 flex-wrap overflow-y-auto'>
            {notes.length === 0 ? <h1 className='text-white/50 text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wider z-0'>No Notes Found</h1> : notes.map((note, index) => (
                <div className='note w-[300px] h-[250px] rounded-xl p-5 flex flex-col justify-between' key={index}>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl font-bold text-white'>{note.title}</h1>
                        <p className='text-white/80 text-sm'>{note.description}</p>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <button onClick={() => deleteNote(note._id)} className='text-md px-5 py-2 bg-red-500 rounded-lg text-white font-bold cursor-pointer hover:bg-red-400 transition-all duration-200'><i className="ri-delete-bin-line mr-2 font-light"></i>Delete</button>
                        <button onClick={() => editNote(note)} className='text-md px-5 py-2 bg-blue-500 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-400 transition-all duration-200'><i className="ri-edit-2-line mr-2 font-light"></i>Edit</button>
                    </div>
                </div>
            ))}
            {editModalOpen && <EditNoteModal
                setEditModalOpen={setEditModalOpen}
                note={note}
            />}
        </div>
    )
}

export default Notes