import React, { useState } from 'react'
import AdvSidenav from './AdvSidenav';
import AddAdvCover from '../../../images/AddAdvCover.png';
import FormatCover from '../../../images/FormatCover2.png';
import GeneralInput from '../../Buttons/GeneralInput';
import URL from '../../Buttons/URL';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { addAdvertisment, decryptAdvertiser } from '../../../queries/query';
import M from 'materialize-css'

const AddAdvertisment = (props) => {

    const [image, setImage] = useState([])

    const handleComplete = () => {
        if(props.decryptAdvertiser && !props.decryptAdvertiser.loading &&  props.decryptAdvertiser.decryptAdvertiser.coupons.length == 0){
            M.toast({ html: "You must add coupons to your account to add advertisment!" })
            return;
        }
        const title = document.querySelector("#add-title").value;
        const link = document.querySelector(".advLink input").value;
        const fileData = new FormData();
        fileData.append("file", image);
        fileData.append("upload_preset", "levitation");
        fileData.append("cloud_name", "levitation");

        // saving to cloud first
        fetch('https://api.cloudinary.com/v1_1/levitation/image/upload', {
            method: "POST",
            body: fileData
        }).then(res => res.json()).then(async (data) => {
            console.log(data.url);
            console.log("Photo uploaded");
            console.log(title, link, data.url, new Date().toLocaleDateString(), props.decryptAdvertiser.decryptAdvertiser.id)
            let res = await props.addAdvertisment({
                variables: {
                    title,
                    link,
                    image: data.url,
                    when: new Date().toLocaleDateString(),
                    advertiserID: props.decryptAdvertiser.decryptAdvertiser.id
                }
            })
            if(res && res.data && res.data.addAdvertisment){
                console.log("Your advertisment is now live!")
                props.history.push("/advertiser/homepage");
            }else{
                console.log("Uh-oh! Something went wrong. Try again")
            }
        }).catch(err => {
            console.log(err);
            return err
        })
    }
    console.log("poropor", props)
    return (
        <div>
            <AdvSidenav />
            <div className="demo" id="main" style={{ overflowY: "visible" }} >
                <div className="row" style={{
                    height: "100%",
                    marginBottom: "0"
                }} >
                    {
                        props.decryptAdvertiser && !props.decryptAdvertiser.loading &&
                        props.decryptAdvertiser.decryptAdvertiser && props.decryptAdvertiser.decryptAdvertiser.coupons.length != 0 ? (
                            null
                        ) : (
                            <div className="col s12 pink center-align valign-wrapper" style={{ height: "50px" }}>
                                <p className="white-text" style={{
                                    margin: "0 auto"
                                }} >You cannot add ads without adding any coupons to your account!</p>
                            </div>
                        )
                    }
                    <div className="col s12 m4 l6" style={{
                        backgroundImage: `url(${AddAdvCover})`,
                        height: "100%",
                    }} >
                    </div>
                    <div className="col s12 m8 l6">
                        <div className="col s12">
                            <h3 style={{ margin: "30px 0 0 30px" }}>Add an advertisment</h3>
                            <hr className="divider" />
                        </div>

                        {/* instruction box here */}
                        <div className="col s12 valign-wrapper hide-on-med-and-down" style={{
                            backgroundImage: `url(${FormatCover})`,
                            height: "150px",
                            borderRadius: "20px",
                            marginBottom: "30px"
                        }} >
                            <p className="white-text col s4 center-align" style={{
                                display: "inline-block",
                                whiteSpace: "nowrap"
                            }} >
                                1. Fill the form
                            </p>
                            
                            <p className="white-text col s4 center-align" style={{
                                display: "inline-block",
                                whiteSpace: "nowrap"
                            }} >
                                2. Make sure you've added<br/> coupons from this account 
                            </p>
                            <p className="white-text col s4 center-align" style={{
                                display: "inline-block",
                                whiteSpace: "nowrap"
                            }} >
                                3. Submit
                            </p>
                        </div>
                        
                        <div className="secretAdv">
                            {/* title */}
                            <GeneralInput placeholder="Catchy line for your ad" classy="col s10 offset-s1 m9 offset-m2 l6 offset-l3" type="text" id="add-title" />
                            
                            {/* link */}
                            <URL classy="advLink col s10 offset-s1 m9 offset-m2 l6 offset-l3"/>

                            {/* image */}
                            <div className="file-field input-field col s10 offset-s1 m9 offset-m2 l6 offset-l3">
                                <div className="btn">
                                    <span>File</span>
                                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" />
                                </div>
                            </div>

                        </div>

                        <div className="col s12" style={{ textAlign: "center", marginTop: "20px" }}>
                            <button className="btn pink" onClick={handleComplete}
                             type="submit" name="action" style={{ borderRadius: "18px" }} >Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(addAdvertisment, { name: "addAdvertisment" }),
    graphql(decryptAdvertiser, {
        name: "decryptAdvertiser",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    token: temp
                }
            }
        }
    })
)(AddAdvertisment)
