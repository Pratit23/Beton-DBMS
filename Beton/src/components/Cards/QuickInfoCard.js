import React from 'react'

function QuickInfoCard({ color, textColor, text, value = 0 }) {
    return (
        <div class="col s12 m3">
            <div class="card" style={{ borderRadius: "24px", backgroundColor: color, color: textColor }} >
                <div class="card-content white-text">
                    <span class="card-title" style={{ color: textColor, fontWeight: "bold" }}>{value}</span>
                    <p style={{ color: textColor, fontWeight: "bold" }}>{text}</p>
                    <p style={{ marginTop: "80px", color: textColor }}
                    ><i className="material-icons">people</i></p>
                </div>
            </div>
        </div>
    )
}

export default QuickInfoCard
