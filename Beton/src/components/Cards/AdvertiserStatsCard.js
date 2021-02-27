import React from 'react'

const AdvertiserStatsCard = ({ src, text, stat }) => {
    return (
        <div className="col s12 m4">
            <div className="card advStatCard">
                <div className="card-content black-text advStat">
                    <img src={src} alt={text} />
                    <h5 className="black-text">{text}</h5>
                    <p>
                        {stat}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdvertiserStatsCard
