import { signInWithGoogle } from "../../firebase/provider"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentification = ( email , password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )

    }
}

export const starGoogleSignIn = () => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) )
    }
}
