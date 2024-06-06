import { doc, setDoc, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
    return async( dispatch , getState ) => {

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

        

    }
}


