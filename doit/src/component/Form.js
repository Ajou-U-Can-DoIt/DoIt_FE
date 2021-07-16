import React, { useState } from 'react';
import Register from './Register';
import FormSuccess from './FormSuccess';

const Signup = ( { history } ) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    
    return (
        <div>
            {!isSubmitted ? <Register submitForm=
            {submitForm} /> : <FormSuccess/>}
        </div>
    );
}

export default Signup;