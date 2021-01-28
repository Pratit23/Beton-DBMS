import React, { useEffect } from 'react';
import GeneralInput from '../../Buttons/GeneralInput';
import GeneralEmail from '../../Buttons/GeneralEmail';
// import GeneralPassword from '../../Buttons/GeneralPassword';
import GeneralDOB from '../../Buttons/GeneralDOB';

const SignUpForm = () => {

    return (
        <form id="signup-form" className="row">

            <h4 className="center-align"
                style={{ fontFamily: "'Lexend Deca', Arial" }}
            >Sign Up</h4>

            {/* name */}
            <GeneralInput placeholder="Your name" classy="col s12 m5 offset-m1" type="text"/>

            {/* dob */}
            <GeneralDOB classy="col s12 m5 offset-m1"/>

            {/* email */}
            <GeneralEmail classy="col s12 m5 offset-m1"/>

            {/* pass */}
            <GeneralInput placeholder="Your password" classy="col s12 m5 offset-m1" type="password"/>

            {/* address */}
            <GeneralInput placeholder="Your address" classy="col s12 m10 offset-m1" type="text"/>

        </form>
    )
}

export default SignUpForm
