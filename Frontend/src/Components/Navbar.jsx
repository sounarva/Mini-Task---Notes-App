import { useState } from "react"
import CreateNoteModal from "./CreateNoteModal"

const Navbar = () => {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <div className='w-full px-5 py-6 bg-zinc-700 flex items-center justify-between'>
                <h1 className='text-3xl font-bold tracking-wide text-white'>Notes Application</h1>
                <button
                    onClick={() => setModalOpen(true)}
                    className='createNoteBtn text-lg px-5 py-2 bg-zinc-500 rounded-lg text-white font-bold cursor-pointer hover:bg-zinc-400 transition-all duration-200'><i className="ri-add-large-line mr-2"></i>Create Note</button>
            </div>
            {modalOpen && <CreateNoteModal setModalOpen={setModalOpen} />}
        </>
    )
}

export default Navbar