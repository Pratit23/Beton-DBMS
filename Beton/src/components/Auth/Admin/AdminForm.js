import React from 'react';
import GeneralInput from '../../Buttons/GeneralInput';
import GeneralEmail from '../../Buttons/GeneralEmail';
import SubmitButton from '../../Buttons/SubmitButton';
import M from 'materialize-css'
import { useState } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { adminLogin } from '../../../queries/query'

const AdminForm = (props) => {
    const [showLoader, setShowLoader] = useState(false);

    const handleSubmit = async (e) => {
        setShowLoader(true)
        e.preventDefault();
        const password = document.getElementById("password-signup").value
        const email = document.getElementById("signup-email").value
        let res = await props.adminLogin({
            variables: {
                email,
                password,
            }
        })
        if (res && res.data && res.data.adminLogin) {
            M.toast({ html: "Wohoo! You're in...ヽ(•‿•)ノ" });
            localStorage.setItem("token", res.data.adminLogin.data)
            props.props.history.push("/admin/homepage");
        } else {
            M.toast({ html: "Oopsie! Something went wrong!" })
            setShowLoader(false)
        }
    }
    return (
        <form id="signup-form" className="row adv-signup">
            <h2 className="white-text center-align"
                style={{ marginBottom: "20px" }}
            >
                Log in
            </h2>

            {/* email */}
            <GeneralEmail classy="col s10 offset-s1 m9 offset-m2 l6 offset-l3" />

            {/* pass */}
            <GeneralInput placeholder="Your password" classy="col s10 offset-s1 m9 offset-m2 l6 offset-l3" type="password" id="password-signup" />
            {
                showLoader ? (
                    <div className="col s10 offset-s1 m9 offset-m2 l6 offset-l3">
                        <div className="progress">
                            <div className="indeterminate blue"></div>
                        </div>
                    </div>
                ) :
                    <div className="col s10 offset-s1 m9 offset-m2 l6 offset-l3">
                        <SubmitButton text="Create" id="login-admin" func={handleSubmit} />
                    </div>
            }
        </form>
    )
}

export default compose(
    graphql(adminLogin, { name: "adminLogin" })
)(AdminForm)
