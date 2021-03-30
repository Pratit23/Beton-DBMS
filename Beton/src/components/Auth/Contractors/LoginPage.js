import React from 'react';
import contractorLogin from './contractorLogin.svg';
import ContractorForm from './ContractorForm';

const LoginPage = (props) => {
    return (
        <div className="row" style={{
            height: "100%",
            width: "100%",
            background: `url(${contractorLogin})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            //    background: "#181818"
        }}>
            <div className="col s12 m6 offset-m3 signupformwrapper valign-wrapper"
                style={{ height: "100%", position: "relative" }}
            >
                <ContractorForm props={{ ...props }} />
            </div>
        </div>
    )
}

export default LoginPage
