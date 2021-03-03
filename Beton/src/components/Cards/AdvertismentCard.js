import React from 'react'

const AdvertismentCard = ({data}) => {
    return (
        <div className="col s12 m4" >
            <div className="card sticky-action" style={{
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
                        <hr className="divider" />
                        <p>
                            Advertisement is live since: {data.when}
                            <br/>
                            Total views: {data.outreach}
                            <br/>
                            Total screentime: {data.screentime}
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default AdvertismentCard
