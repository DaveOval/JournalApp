import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {} , formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ validations, setValidations ] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ]);

    useEffect(() => {
        setFormState( initialForm )
    }, [initialForm])
    

    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( validations )) {
            if ( validations[formValue] !== null ) {
                return false;
            }
        }

        return true;
    }, [ validations ] )

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    };

    const onResetForm = () => {
        setFormState( initialForm );
    };

    const createValidators = () => {
        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations )) {
            const [ fn , errorMessage ] = formValidations[formField];
            formCheckedValues[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setValidations( formCheckedValues );
    };

    return {
        ...formState,
        formState,
        validations,
        onInputChange,
        onResetForm,

        ...validations,
        isFormValid
    };
};
