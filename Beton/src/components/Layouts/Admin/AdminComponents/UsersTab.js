import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { users } from '../../../../queries/query';
import Lottie from 'react-lottie';


const UsersTab = (props) => {
    return (
        <div className="demo" id="main" style={{ overflowY: "auto" }} >
            <div className="row advHomeTop">
                <div className="col s8">
                    <h3 style={{ margin: "30px 0 0 30px" }}>
                        All Users
                    </h3>
                    <hr className="divider" />
                    {
                        props.users && !props.users.loading && props.users.users ? (
                            props.users.users.map(u=>{
                                let level = "";
                                console.log(u.karma);
                                if (u.karma < 25){
                                    level = "Beginner"
                                }else if(u.karma < 65){
                                    level = "Intermediate"
                                }else{
                                    level = "Pro"
                                }
                                return (
                                    <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                        <div className="row valign-wrapper">
                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${u.profile})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                            </div>
                                            <div className="col s9">
                                                <h5 className="black-text">
                                                    {u.name}
                                                </h5>
                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                    {u.email} | {level} | Click to know more
                                                </p>
                                            </div>
                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                ➜
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(users, { name: "users" })
)(UsersTab)
