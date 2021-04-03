import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { allTenders } from '../../../../queries/query';


const TendersTab = (props) => {
    return (
        <div className="demo" id="main" style={{ overflowY: "auto" }} >
            <div className="row advHomeTop" style={{ height: "100%" }} >
                <div className="col s8">
                    <h3 style={{ margin: "30px 0 0 30px" }}>
                        All Tenders
                    </h3>
                    <hr className="divider" />
                    {/* drop down here */}
                    <div className="container" style={{ width: "85%" }} >
                        {
                            props.allTenders && !props.allTenders.loading && props.allTenders.allTenders ? (
                                props.allTenders.allTenders.map(u => {
                                    console.log(u)
                                    return (
                                        <div className="card-panel" style={{ borderRadius: "12px", padding: "10px", cursor: "pointer" }}  >
                                            <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                <i className="material-icons col s2 center" style = {
                                                u.isCompleted == false ? u.isAssigned == false ? {
                                                    backgroundColor: "#eef5ff",
                                                    color: "#5f88fe",
                                                    padding: "15px 15px",
                                                    width: "max-content",
                                                    borderRadius: "50%",
                                                    fontWeight: "bolder"
                                                } : {
                                                    backgroundColor: "#fff3da",
                                                    color: "#feb81b",
                                                    padding: "15px 15px",
                                                    width: "max-content",
                                                    borderRadius: "50%",
                                                    fontWeight: "bolder"
                                                } : {
                                                    backgroundColor: "#ffebea",
                                                    color: "#fe7e7c",
                                                    padding: "15px 15px",
                                                    width: "max-content",
                                                    borderRadius: "50%",
                                                    fontWeight: "bolder"
                                                }} >check</i>
                                                <div className="col s9">
                                                    <h5 className="black-text">
                                                        {u.source}
                                                    </h5>
                                                    <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                        Click to know more
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : <p>Loading..</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(allTenders, { name: "allTenders" })
)(TendersTab)
