import React from 'react'

function StatsCard({props, text}) {
    return (
        <div class="card white" style={{ borderRadius: "18px" }}>
            <div class="card-content black-text valign-wrapper" style={{ height: "140px" }} >
                <div className="center-align" style={{ width: "100%" }}>
                    <span class="card-title center-align">03</span>
                    <p className="center-align">
                        {text}
                    </p>
                </div>
            </div>
            <div class="card-action" style={{ borderRadius: "0 0 18px 18px", padding: "8px 20px" }}>
                <p>
                    <a href="#" style={{ fontSize: "smaller" }} >Learn More</a>
                </p>
            </div>
        </div>
    )
}

export default StatsCard
