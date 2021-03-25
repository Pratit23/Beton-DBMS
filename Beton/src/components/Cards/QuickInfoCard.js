import React from 'react'

function QuickInfoCard({ color, textColor }) {
    return (
        <div class="col s12 m3">
            <div class="card" style={{ borderRadius: "24px", backgroundColor: color, color: textColor }} >
                <div class="card-content white-text">
                    <span class="card-title" style={{ color: textColor, fontWeight: "bold" }}>60</span>
                    <p style={{ color: textColor, fontWeight: "bold" }}>Total cases</p>
                    <p style={{ marginTop: "80px", color: textColor }}
                    ><i className="material-icons">people</i></p>
                </div>
            </div>
        </div>
    )
}

export default QuickInfoCard
