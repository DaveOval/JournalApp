import { doc, setDoc, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote , savingNewNote, setNotes} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => {
    return async( dispatch , getState ) => {
        
        dispatch( savingNewNote() )

        const { uid } = getState().auth;
        console.log("startnewnote")
        //uid

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) )
        dispatch( setActiveNote( newNote ) )

    }
}

export const startLoadingNotes = () => {
    return async( dispatch , getState ) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error("El UID del usuario no existe")

        const notes = await loadNotes( uid )

        dispatch( setNotes( notes ) )
    }
}



