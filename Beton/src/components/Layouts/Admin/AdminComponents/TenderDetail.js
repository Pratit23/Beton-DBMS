import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as composey } from 'lodash';
import { getSpecificTender } from '../../../../queries/query';
import SpecificTenderMap from './SpecificTenderMap';
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/loading.json'


const TenderDetail = ({ props, getSpecificTender }) => {
    console.log(props, getSpecificTender);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <>
            {
                !getSpecificTender.loading && getSpecificTender.getSpecificTender ? (
                    <div className="demo" id="main" style={{ overflowY: "auto" }}>
                        <div className="row advHomeTop" style={{ height: "100%" }} >
                            <div className="col s8">
                                <h4 style={{ margin: "30px 0 0 0" }}>Tender Statistics</h4>
                                <hr className="divider" />
                                <div className="col s6">
                                    <SpecificTenderMap coords={[
                                        { "lat": Number(getSpecificTender.getSpecificTender.source.split(", ")[0]), "lng": Number(getSpecificTender.getSpecificTender.source.split(", ")[1]) },
                                        { "lat": Number(getSpecificTender.getSpecificTender.destination.split(", ")[0]), "lng": Number(getSpecificTender.getSpecificTender.destination.split(", ")[1]) },
                                    ]} />
                                </div>
                                <div className="col s6">
                                    <p>
                                        <strong>Name Of Work:</strong> {getSpecificTender.getSpecificTender}
                                    </p>
                                </div>
                            </div>
                            <div className="col s4">
                                <h4 style={{ margin: "30px 0 0 0" }}>Quotations by:</h4>
                                <hr className="divider" />

                            </div>
                        </div>
                    </div>
                ) : (
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                        isStopped={false}
                        isPaused={false}
                    />
                )
            }
        </>
    )
}

export default composey(
    graphql(getSpecificTender, {
        name: "getSpecificTender",
        options: (props) => {
            return {
                variables: {
                    id: props.props.match.params.tid
                }
            }
        }
    })
)(TenderDetail)
