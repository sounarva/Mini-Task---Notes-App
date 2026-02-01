import React, { useState } from 'react'
import axios from 'axios'
import { Bounce, toast } from 'react-toastify'

const CreateNoteModal = ({ setModalOpen }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const URI = import.meta.env.VITE_BACKEND_URL

    async function createNote() {
        await axios.post(`${URI}/notes`, {
            title,
            description
        })
        toast.success('Note Created Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        setModalOpen(false)
    }
    return (
        <div className="w-full h-full bg-black/50 fixed top-0 left-0 flex items-center justify-center z-10">
            <div className="w-[500px] px-5 py-5 bg-zinc-900 rounded-lg border-2 border-zinc-500">
                <h2 className="text-2xl font-bold text-white">Add New Note</h2>
                <div className="flex flex-col gap-5 mt-5">
                    <input
                        name='title'
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        type="text" placeholder="Enter a title" className="w-full px-3 py-2 bg-zinc-800 rounded-lg border-2 border-zinc-500 text-white" />
                    <input
                        name='description'
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        type="text" placeholder="Enter a description" className="w-full px-3 py-2 bg-zinc-800 rounded-lg border-2 border-zinc-500 text-white" />
                    <div className="w-full flex items-center justify-between">
                        <button
                            onClick={() => createNote()}
                            className="px-3 py-2 bg-blue-500 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-400 transition-all duration-200">Add Note</button>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="px-3 py-2 bg-red-500 rounded-lg text-white font-bold cursor-pointer hover:bg-red-400 transition-all duration-200">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNoteModal