import React, { useEffect } from 'react';
import GeneralInput from '../../Buttons/GeneralInput';
import GeneralEmail from '../../Buttons/GeneralEmail';
import GeneralDOB from '../../Buttons/GeneralDOB';
import SubmitButton from '../../Buttons/SubmitButton';
// have to import these 2 lines
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { users, addUser } from '../../../queries/query'
import M from 'materialize-css'

const SignUpForm = (props) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById("name-signup").value
        const password = document.getElementById("password-signup").value
        const email = document.getElementById("signup-email").value
        const address = document.getElementById("address-signup").value
        // const name = document.getElementById("name-signup").value
        let day = document.querySelector('.day').value
        let month = document.querySelector('.month').value
        let year = document.querySelector('.year').value
        let dob = `${day}/${month}/${year}`;
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(address)
        console.log(dob)

        let res = await props.addUser({
            variables: {
                name,
                email,
                password,
                address,
                dob
            }
        })

        console.log("Res: ", res)
        if(res.data.addUser){
            M.toast({html: "Wohoo! You're in...Log in to get in ヽ(•‿•)ノ"});
            props.props.history.push("/login");
        }
        else{
            M.toast({html: "Oopsie! Something went wrong!"})
        }
    }
    console.log(props)
    return (
        <form id="signup-form" className="row">
            <h2 className="white-text center-align"
                style={{ marginBottom: "20px" }}
            >
                Sign Up
            </h2>
            {/* name */}
            <GeneralInput placeholder="Your name" classy="col s12 m8 offset-m2" type="text" id="name-signup" />

            {/* dob */}
            <GeneralDOB classy="col s12 m8 offset-m2"/>

            {/* email */}
            <GeneralEmail classy="col s12 m8 offset-m2"/>

            {/* pass */}
            <GeneralInput placeholder="Your password" classy="col s12 m8 offset-m2" type="password" id="password-signup" />

            {/* address */}
            <GeneralInput placeholder="Your address" classy="col s12 m8 offset-m2" type="text" id="address-signup" />
            <SubmitButton text="Create" id="signup" func={handleSubmit} />
        </form>
    )
}

export default compose(
    graphql(users, { name: "users" }),
    graphql(addUser, { name: "addUser" })
)(SignUpForm)
