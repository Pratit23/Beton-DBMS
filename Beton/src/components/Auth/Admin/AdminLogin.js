import React from 'react';
import AdminForm from './AdminForm';
import Liquid from './liquid.svg';

const AdminLogin = (props) => {
    return (
        <div className="row" style={{
            height: "100%",
            width: "100%",
            background: `url(${Liquid})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            //    background: "#181818"
        }}>
            <div className="col s12 m6 offset-m3 signupformwrapper valign-wrapper"
                style={{ height: "100%", position: "relative" }}
            >
                <AdminForm props={{ ...props }} />
            </div>
        </div>
    )
}

export default AdminLogin
