import React from 'react'
import { Link } from 'react-router-dom'

const MinimalImageCard = ({ img, text, link }) => {
    return (
        <Link to={link}>
            <div className="card-panel" style={{ backgroundColor: "#edf6ff", borderRadius: "8px", padding: "2px 24px" }} >
                <div className="row valign-wrapper" style={{ padding: "10px 0", marginBottom: "0" }} >
                    <div className="col s4">
                        <img src={img} alt="" className="circle responsive-img" />
                    </div>
                    <div className="col s7">
                        <h6 style={{ color: "#002438" }} >
                            {text}
                        </h6>
                        <span style={{ color: "#002438" }} >
                            Click here
                        </span>
                    </div>
                    <div className="col s1"  style={{ color: "#002438" }} >
                        {'>'}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MinimalImageCard
