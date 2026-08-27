// import React from 'react';

import { useRef } from "react";

const UncontrolledField = () => {

    const emailRef= useRef('')
    const passwordRef = useRef('')

    const handleSubmit= e  => {
        e.preventDefault();
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="email" ref={emailRef} name="" placeholder="Your email" />
                <br />
                <input type="password" ref={passwordRef} name="" placeholder="your password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;