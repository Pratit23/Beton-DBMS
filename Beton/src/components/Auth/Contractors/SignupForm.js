import React, { useEffect } from 'react';
import GeneralInput from '../../Buttons/GeneralInput';
import GeneralEmail from '../../Buttons/GeneralEmail';
import GeneralDOB from '../../Buttons/GeneralDOB';
import SubmitButton from '../../Buttons/SubmitButton';
// have to import these 2 lines
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { addContractor } from '../../../queries/query'
import M from 'materialize-css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = (props) => {
    const [showLoader, setShowLoader] = useState(false);
    const [image, setImage] = useState([])

    const handleSubmit = async (e) => {
        setShowLoader(true)
        e.preventDefault();
        const name = document.getElementById("name-signup").value
        const password = document.getElementById("password-signup").value
        const email = document.getElementById("signup-email").value
        const address = document.getElementById("address-signup").value

        const fileData = new FormData();
        fileData.append("file", image);
        fileData.append("upload_preset", "levitation");
        fileData.append("cloud_name", "levitation");

        // saving to cloud first
        fetch('https://api.cloudinary.com/v1_1/levitation/image/upload', {
            method: "POST",
            body: fileData
        }).then(res => res.json()).then(async (data) => {
            console.log("Photo uploaded")
            let res = await props.addContractor({
                variables: {
                    name,
                    email,
                    password,
                    address,
                    profile: data.url
                }
            })
            if (res.data.addContractor) {
                M.toast({ html: "Wohoo! We've sent your account to verification! Once it is done, you'll be notifiedヽ(•‿•)ノ" });
                props.props.history.push("/contractor/login");
            }
            else {
                M.toast({ html: "Oopsie! Something went wrong!" })
                setShowLoader(false)
            }
        }).catch(err => {
            console.log(err);
            return err
        })
    }
    console.log(props)
    return (
        <form id="signup-form" className="row">
            <h4>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }} >
                    Beton
                </Link>
            </h4>
            <h2 className="black-text center-align"
                style={{ marginBottom: "20px" }}
            >
                Sign Up
            </h2>
            {/* name */}
            <GeneralInput placeholder="Your name" classy="col s10 offset-s1 m9 offset-m2 l8 offset-l2" type="text" id="name-signup" />

            {/* email */}
            <GeneralEmail classy="col s10 offset-s1 m9 offset-m2 l8 offset-l2" />

            {/* pass */}
            <GeneralInput placeholder="Your password" classy="col s10 offset-s1 m9 offset-m2 l8 offset-l2" type="password" id="password-signup" />

            {/* address */}
            <GeneralInput placeholder="Your address" classy="col s10 offset-s1 m9 offset-m2 l8 offset-l2" type="text" id="address-signup" />

            {/* image input */}
            <div className="col s10 offset-s1 m9 offset-m2 l8 offset-l2" style={{ marginTop: "0" }}>
                <div className="file-field input-field">
                    <div className="btn" style={{ borderRadius: "24px", background: "#275EFE" }}>
                        <span>Profile Picture</span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
            </div>
            {
                showLoader ? (
                    <div className="col s10 offset-s1 m9 offset-m2 l8 offset-l2">
                        <div className="progress">
                            <div className="indeterminate blue"></div>
                        </div>
                    </div>
                ) :
                    <SubmitButton text="Create" id="signup-contr" func={handleSubmit} />
            }
        </form>
    )
}

export default compose(
    graphql(addContractor, { name: "addContractor" })
)(SignUpForm)
