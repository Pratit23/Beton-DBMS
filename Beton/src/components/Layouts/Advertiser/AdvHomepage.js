import React from 'react'
import AdvertiserStatsCard from '../../Cards/AdvertiserStatsCard'
import AdvOne from '../../../images/advOne.png'
import AdvTwo from '../../../images/advTwo.png'
import AdvThree from '../../../images/AdvThree.png'
import AdvChart from '../../Charts/AdvChart'
import AdvDonut from '../../Charts/AdvDonut'
import MinimalImageCard from '../../Cards/MinimalImageCard'
import One from '../../../images/one.png'
import Two from '../../../images/two.png'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { decryptAdvertiser } from '../../../queries/query'



const AdvHomepage = (props) => {
    console.log(props)
    return (
        <div className="demo" id="main">
            <div className="row advHomeTop">
                <div className="col s12 m8">
                    <h3 style={{ margin: "30px 0 0 30px" }}>Overiew</h3>
                    <hr className="divider" />
                    {
                        props.decryptAdvertiser && !props.decryptAdvertiser.loading && props.decryptAdvertiser.decryptAdvertiser ? (
                            <>
                                <AdvertiserStatsCard text="Advertisments" src={AdvOne} stat={props.decryptAdvertiser.decryptAdvertiser.advertisments.length} />
                                <AdvertiserStatsCard text="Total Coupons" src={AdvTwo} stat={props.decryptAdvertiser.decryptAdvertiser.coupons.length} />
                                <AdvertiserStatsCard text="Available Coupons" src={AdvThree} stat={props.decryptAdvertiser.decryptAdvertiser.coupons.filter(c => c.assigned == false).length} />
                            </>
                        ) : (
                            <>
                                <AdvertiserStatsCard text="Advertisments" src={AdvOne} stat="00" />
                                <AdvertiserStatsCard text="Total Coupons" src={AdvTwo} stat="00" />
                                <AdvertiserStatsCard text="Available Coupons" src={AdvThree} stat="00" />
                            </>
                        )
                    }
                    <div className="col s12 advChart">
                        {
                            props.decryptAdvertiser && !props.decryptAdvertiser.loading && props.decryptAdvertiser.decryptAdvertiser ? (
                                <AdvChart values={props.decryptAdvertiser.decryptAdvertiser.advertisments} />
                            ) : null
                        }
                    </div>
                </div>
                <div className="col s12 m4 advStatsInfographics">
                    <h3 style={{ margin: "30px 0 0 30px" }}>Statistics</h3>
                    <hr className="divider" />
                    <div className="col s12">
                        {
                            props.decryptAdvertiser && !props.decryptAdvertiser.loading && props.decryptAdvertiser.decryptAdvertiser ? (
                                <AdvDonut values={[
                                    props.decryptAdvertiser.decryptAdvertiser.advertisments.length,
                                    props.decryptAdvertiser.decryptAdvertiser.coupons.length,
                                    props.decryptAdvertiser.decryptAdvertiser.coupons.filter(c => c.assigned == false).length,
                                    props.decryptAdvertiser.decryptAdvertiser.coupons.filter(c => c.assigned == true).length,
                                ]} />
                            ) : <AdvDonut values={[0, 0, 0, 0]} />
                        }
                    </div>
                    <h3 className="col s12" style={{ margin: "20px", marginBottom: "0" }}>
                        Quick links
                    </h3>
                    <div className="col s12" style={{ borderRadius: "18px", height: "100px", margin: "10px 0" }} >
                        <MinimalImageCard img={One} text="All Coupons" link="/advertiser/coupons" />
                    </div>
                    <div className="col s12" style={{ borderRadius: "18px", height: "100px", margin: "10px 0" }} >
                        <MinimalImageCard img={Two} text="All ads" link="/advertiser/advertisments" />
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
)(AdvHomepage)
