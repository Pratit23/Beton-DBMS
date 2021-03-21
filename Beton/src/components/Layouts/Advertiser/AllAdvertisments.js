import React, { useEffect } from 'react'
import { graphql } from 'react-apollo';
import { allMyAds } from '../../../queries/query';
import { flowRight as compose } from 'lodash';
import AdvertismentCard from '../../Cards/AdvertismentCard'
import AdvSidenav from './AdvSidenav'
import { useState } from 'react';
import empty from '../../../images/empty-search.png';
import { Link } from 'react-router-dom';

const AllAdvertisments = (props) => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        if (props.allMyAds && !props.allMyAds.loading && props.allMyAds.allMyAds && props.allMyAds.allMyAds.length != 0) {
            setAds(props.allMyAds.allMyAds);
        }
    }, [props])

    const removeAdd = (id) => {
        setAds(ads.filter(a => a.id != id));
    }

    return (
        <div>
            <AdvSidenav />
            <div className="demo" id="main" style={{ overflowY: "visible" }} >
                <div className="row">
                    <div className="col s12">
                        <h3 style={{ margin: "30px 0 0 30px" }}>All advertisments</h3>
                        <hr className="divider" />
                    </div>
                    {ads.length != 0
                        ? (
                            props.allMyAds.allMyAds.map(a => {
                                return (
                                    <AdvertismentCard data={a} removeAdd={removeAdd} />
                                )
                            })
                        ) : <div className="center">
                            <h4>
                                Oops! No ads are live yet. Headover to the <Link to="/advertiser/add/advertisments"
                                    style={{ textDecoration: "none", fontSize: "inherit" }}
                                >add ads</Link> section to add some!
                            </h4>
                            <img src={empty} style={{ height: "60%", width: "60%" }} alt="No ads yet!" />
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default compose(
    graphql(allMyAds, {
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
