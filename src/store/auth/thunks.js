import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassowrd, signInWithGoogle } from "../../firebase/provider"
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

        dispatch( login( result ) );
    }
}

export const starCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassowrd( { email, password, displayName } )

        if( !ok ) return dispatch( logout({ errorMessage }) );

        dispatch( login({ uid, displayName, email, photoURL }) );
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });

        if( !result.ok) return dispatch( logout( result.errorMessage ));

        dispatch( login( result ))
    }
}

export const startLogout = () => {

    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( logout() );

    }

}
