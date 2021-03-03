import React, { useEffect } from 'react'
import { graphql } from 'react-apollo';
import { allMyAds } from '../../../queries/query';
import { flowRight as compose } from 'lodash';
import AdvertismentCard from '../../Cards/AdvertismentCard'
import AdvSidenav from './AdvSidenav'

const AllAdvertisments = (props) => {
    return (
        <div>
            <AdvSidenav />
            <div className="demo" id="main" style={{ overflowY: "visible" }} >
                <div className="row">
                    <div className="col s12">
                        <h3 style={{ margin: "30px 0 0 30px" }}>All advertisments</h3>
                        <hr className="divider" />
                    </div>
                    {
                        props.allMyAds && !props.allMyAds.loading && props.allMyAds.allMyAds && props.allMyAds.allMyAds.length != 0 ? (
                            props.allMyAds.allMyAds.map(a=>{
                                console.log("aa", a)
                                return (
                                    <AdvertismentCard data={a}/>
                                )
                            })
                        ) : <p>Uh oh! No ads live yet!</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(allMyAds,{
        name: "allMyAds",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    token: temp
                }
            }
        }
    })
)(AllAdvertisments)
