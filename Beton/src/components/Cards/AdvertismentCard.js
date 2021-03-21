import React from 'react'
import { allMyAds, deleteThisAdd } from '../../queries/query';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';


const AdvertismentCard = ({ data, deleteThisAdd, removeAdd }) => {

    return (
        <div className="col s12 m4" >
            <div className="card sticky-action medium" style={{
                borderRadius: "24px"
            }} >
                <div className="card-image">
                    <img className="activator" style={{
                        borderRadius: "24px 24px 0 0"
                    }} src={data.image} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{data.title}<i className="material-icons right">more_vert</i></span>
                    <p><a href={data.link} target="__blank" >Click here</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{data.title}<i className="material-icons right">close</i></span>
                    <p><a href={data.link} target="__blank" >Click here</a></p>
                    <hr className="divider" />
                    <p>
                        Advertisement is live since: {data.when}
                        <br />
                        Total views: {data.outreach}
                        <br />
                        Total screentime: {data.screentime}
                    </p>
                </div>
                <div className="card-action">
                    <span style={{ cursor: "pointer" }}
                        onClick={async () => {
                            let temp = localStorage.getItem("token") || "";
                            await deleteThisAdd({
                                variables: {
                                    id: data.id,
                                    advertiserID: data.advertiserID.id
                                },
                                refetchQueries: [{
                                    query: allMyAds,
                                    variables: {
                                        token: temp
                                    }
                                }]
                            });
                            removeAdd(data.id);
                        }}
                    >
                        <i class="material-icons red-text">delete_forever</i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(deleteThisAdd, { name: "deleteThisAdd" })
)(AdvertismentCard)
