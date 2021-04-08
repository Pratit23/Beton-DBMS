import React from 'react';
import Lottie from 'react-lottie';
import downloadApk from '../../images/Lottie/downloadApk.json';
import apk from '../../beton.apk';

const DownloadPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: downloadApk,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div style={{ height: "100vh", width: "100vw" }} className="valign-wrapper center-align" >
            <div className="container">
                <h5 className="container">
                    For smaller screens, we strongly advise you to use our app.
                    
                    Therefore, for performance issues we have limited the use of this website to only large screen devices.
                    <br />
                    <hr className="divider" />
                    Haven't downloaded our app yet? You can download it right here by clicking <a href={apk} download target="__blank" style={{ textDecoration: "none", fontSize: "initial" }}  >here</a>
                </h5>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={false}
                    isPaused={false}
                />
            </div>
        </div>
    )
}

export default DownloadPage
