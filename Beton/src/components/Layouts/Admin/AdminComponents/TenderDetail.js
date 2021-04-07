import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as composey } from 'lodash';
import { getSpecificTender } from '../../../../queries/query';


const TenderDetail = (props) => {
    console.log(props)
    return (
        <div className="demo" id="main" style={{ overflowY: "auto" }}>
            <div className="row advHomeTop" style={{ height: "100%" }} >
                <div className="col s8">
                    <h4 style={{ margin: "30px 0 0 0" }}>Tender Statistics</h4>
                    <hr className="divider" />
                </div>
                <div className="col s4">
                    <h4 style={{ margin: "30px 0 0 0" }}>Quotations by:</h4>
                    <hr className="divider" />

                </div>
            </div>
        </div>
    )
}

export default composey(
    graphql(getSpecificTender, {
        name: "getSpecificTender",
        options: (props) => {
            console.log(props.props.match.params.tid)
            return {
                variables: {
                    id: props.props.match.params.tid
                }
            }
        }
    })
)(TenderDetail)
