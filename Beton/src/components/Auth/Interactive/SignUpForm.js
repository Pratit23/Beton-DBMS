import React, { useEffect } from 'react';
import GeneralInput from '../../Buttons/GeneralInput';
import GeneralEmail from '../../Buttons/GeneralEmail';
// import GeneralPassword from '../../Buttons/GeneralPassword';
import GeneralDOB from '../../Buttons/GeneralDOB';
import SubmitButton from '../../Buttons/SubmitButton';

const SignUpForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form id="signup-form" className="row">
            <h3 className="show-on-small-only center-align hide-on-med-and-up"
            >
                Sign Up
            </h3>
            {/* name */}
            <GeneralInput placeholder="Your name" classy="col s10 offset-s1 m6" type="text" id="name-signup"/>

            {/* dob */}
            <GeneralDOB classy="col s10 offset-s1 m6"/>

            {/* email */}
            <GeneralEmail classy="col s10 offset-s1 m6"/>

            {/* pass */}
            <GeneralInput placeholder="Your password" classy="col s10 offset-s1 m6" type="password" id="password-signup"/>

            {/* address */}
            <GeneralInput placeholder="Your address" classy="col s10 offset-s1 m12" type="text" id="address-signup" />

            <SubmitButton text="Create" id="signup" func={handleSubmit} />
        </form>
    )
}

export default SignUpForm
