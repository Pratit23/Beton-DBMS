import React, { useEffect } from 'react';
import GeneralInput from '../../Buttons/GeneralInput';
import GeneralEmail from '../../Buttons/GeneralEmail';
import GeneralDOB from '../../Buttons/GeneralDOB';
import URL from '../../Buttons/URL';
import SubmitButton from '../../Buttons/SubmitButton';
// have to import these 2 lines
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { addAdvertiser } from '../../../queries/query'
import M from 'materialize-css'
import { useState } from 'react';

const AdvSignup = (props) => {
    const [showLoader, setShowLoader] = useState(false);

    const handleSubmit = async (e) => {
        setShowLoader(true)
        e.preventDefault();
        const company = document.getElementById("company-name-signup").value
        const password = document.getElementById("password-signup").value
        const email = document.getElementById("signup-email").value
        const url = document.getElementById("website-url").value
        const category = document.getElementById("category-signup").value
        let res = await props.addAdvertiser({
            variables: {
                email,
                password,
                company,
                category,
                website: url
            }
        })
        if (res && res.data && res.data.addAdvertiser) {
            M.toast({ html: "Wohoo! You're in...Log in to get in ヽ(•‿•)ノ" });
            props.props.history.push("/advertiser/login");
        }
        else {
            M.toast({ html: "Oopsie! Something went wrong!" })
            setShowLoader(false)
        }
    }
    return (
        <form id="signup-form" className="row adv-signup">
            <h2 className="black-text center-align"
                style={{ marginBottom: "20px" }}
            >
                Sign Up
            </h2>
            {/* name */}
            <GeneralInput placeholder="Company name" classy="col s10 offset-s1 m9 offset-m2 l6 offset-l3" type="text" id="company-name-signup" />

            {/* category */}
            <GeneralInput placeholder="Category" classy="col s10 offset-s1 m9 offset-m2 l6 offset-l3" type="text" id="category-signup" />

            {/* email */}
            <GeneralEmail classy="col s10 offset-s1 m9 offset-m2 l6 offset-l3" />

            {/* pass */}
            <GeneralInput placeholder="Your password" classy="col s10 offset-s1 m9 offset-m2 l6 offset-l3" type="password" id="password-signup" />

            {/* website */}
            <URL classy="col s10 offset-s1 m9 offset-m2 l6 offset-l3"/>
            {
                showLoader ? (
                    <div className="col s10 offset-s1 m9 offset-m2 l6 offset-l3">
                        <div className="progress">
                            <div className="indeterminate blue"></div>
                        </div>
                    </div>
                ) : 
                <div className="col s10 offset-s1 m9 offset-m2 l6 offset-l3">
                    <SubmitButton text="Create" id="signup-adv" func={handleSubmit} />
                </div>
            }
        </form>
    )
}

export default compose(
    graphql(addAdvertiser, { name: "addAdvertiser" })
)(AdvSignup)
