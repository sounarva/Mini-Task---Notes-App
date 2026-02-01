import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const NotesContext = createContext();

export function NotesContextProvider({ children }) {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                let response = await axios.get('http://localhost:3000/notes')
                setNotes(response.data.notes || [])
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchNotes()
    }, [notes])


    return (
        <NotesContext.Provider value={{ notes }}>
            {children}
        </NotesContext.Provider>
    )
}