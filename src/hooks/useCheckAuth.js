import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";


export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth );
    const dispathc = useDispatch();

    useEffect(() => {
      
      onAuthStateChanged( FirebaseAuth, async( user ) => {
        if ( !user ) return dispathc( logout() );

        const { uid, email, displayName , photoURL} = user;
        dispathc( login({ uid, email, displayName , photoURL}) )
        dispathc( startLoadingNotes() )
      })
    }, []);

    return {
        status
    }
}
