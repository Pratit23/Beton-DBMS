import React from 'react';
import AdvSidenav from './AdvSidenav';
import { graphql } from 'react-apollo'
import { decryptAdvertiser } from '../../../queries/query';
import { flowRight as compose } from 'lodash'
import { Datagrid } from '@material-ui/data-grid';


const AllCoupons = (props) => {
    console.log(props)
    return (
        <div>
            <AdvSidenav />
            <div className="demo" id="main" style={{ overflowY: "visible" }}  >
                <div className="row">
                    <div className="col s12">
                        <h3 style={{ margin: "30px 0 0 30px" }}>Add Coupons</h3>
                        <hr className="divider" />
                    </div>
                    <div className="col s12">
                        <table className="responsive-table centered highlight striped" >
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Validity</th>
                                <th>Assigned</th>
                                <th>Advertiser</th>
                                <th>User</th>
                            </tr>
                            </thead>

                            <tbody>
                                {

                                }
                                <tr>
                                    <td>FOODIE</td>
                                    <td>200</td>
                                    <td>1</td>
                                    <td>No</td>
                                    <td>Twitter</td>
                                    <td>-</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    

                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(decryptAdvertiser, {
        name: "decryptAdvertiser",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    token: temp
                }
            }
        }
    }) 
)(AllCoupons)
