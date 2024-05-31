import { checkingCredentials } from "./"

export const checkingAuthentification = ( email , password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )

    }
}

export const starGoogleSignIn = () => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() )

    }
}
