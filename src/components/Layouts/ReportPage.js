import React, { useEffect, useState } from 'react'
import Sidenav from '../Layouts/Sidenav';
import UploadButton from '../Buttons/UploadButton'

const ReportPage = () => {

    const [image, setImage] = useState(null)

    const handlePicture = (e) => {
        e.preventDefault()
        if (e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleClick = () => {

    }

    useEffect(() => {
        console.log("Nude uploaded")
    }, [image])

    return (
        <div className="row">
            <div className="col s3" style={{ height: "100vh", backgroundColor: "black" }}>
                <Sidenav />
            </div>
            <div className="col s9" style={{ padding: "0", overflowX: "hidden" }}>
                <div className="row" style={{ margin: "0" }}>
                    <div className="col s8 reportForm">
                        <div className="row">
                            <div className="col s12">
                                <h2 className="black-text">REPORT POTHOLES</h2>
                            </div>
                            <div className="col s6 right-align">
                                {/* <div className="btn-floating btn-large red"><input type="file"/><i style={{padding: '70px'}} className="material-icons">upload</i></div> */}
                                <div className="file-field input-field">
                                    <div className="btn">
                                        <span>File</span>
                                        <input type="file" id="photo" onChange={handlePicture} />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" required />
                                    </div>
                                </div>
                            </div>
                            <div className="col s12">
                                {
                                    console.log("Image 0: ", image),
                                    image ? <img className="responsive-img" src={image} /> : null
                                }
                            </div>
                            <div className="col s12">
                                <UploadButton onClick={() => handleClick}/>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <h3>STEPS</h3>
                        <h5>Upload a picture</h5>
                        <h5>Verfying picture</h5>
                        <h5>Select Location</h5>
                        <h5>Your Details</h5>
                        <h5>Submit</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReportPage
