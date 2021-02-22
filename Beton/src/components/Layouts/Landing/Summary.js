import React, { useEffect } from 'react';
import ImageCard from '../../Cards/ImageCard';

const Summary = ({ src, filename, size, uploaded, address }) => {
    useEffect(() => {
        window.$(document).ready(function(){
            window.$('.connecty').connections();
        })
        return () => {
            // console.log("in here")
            window.$('.connecty').connections('remove');
        }
    })
    return (
        <>
            <div className="row" style={{ marginBottom: "0", height: "100%" }} >
                {/* first step */}
                <div className="col s11 offset-s1" style={{marginTop: "40px"}}>
                    <h4 className="">
                        <span className="connecty">1.</span> Your Selection
                    </h4>
                    <hr className="divider" style={{marginBottom: "20px"}}/>
                    <div className="col s12 m11 offset-m1">
                        <ImageCard src={src} filename={filename} size={size} uploaded={uploaded} />
                    </div>
                </div>

                {/* second step */}
                <div className="col s10 offset-s2" style={{marginTop: "20px"}}>
                    <h4 className="">
                        <span className="connecty">2.</span> Location selected
                    </h4>
                    <hr className="divider" style={{marginBottom: "20px"}}/>
                    <div className="col s12">
                        <p>
                            Pothole supposedly at: {address}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary
