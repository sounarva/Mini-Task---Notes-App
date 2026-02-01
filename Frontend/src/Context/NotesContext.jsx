import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const NotesContext = createContext();
const URI = import.meta.env.VITE_BACKEND_URL

export function NotesContextProvider({ children }) {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                let response = await axios.get(`${URI}/notes`)
                setNotes(response.data.notes || [])
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchNotes()
    }, [])


    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    )
}