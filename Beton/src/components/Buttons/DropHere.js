import React, { useEffect } from 'react'
import './DropHere.css'

export default function DropHere(props) {

    const handleChange = (e) => {
        var image = document.querySelector("#ml5Image");
        image.src = URL.createObjectURL(e.target.files[0]);
        props.handlePicture(e.target.files[0])
    }

    useEffect(() => {
        console.log("Drophere useEffect working")
        var fileUpload = document.querySelector(".upload");

        fileUpload.addEventListener("dragover", function () {
            this.classList.add("drag");
            this.classList.remove("drop", "done");
        });

        fileUpload.addEventListener("dragleave", function () {
            this.classList.remove("drag");
        });

        fileUpload.addEventListener("drop", start, false);
        fileUpload.addEventListener("change", start, false);

        function start() {
            this.classList.remove("drag");
            this.classList.add("drop");
            setTimeout(() => this.classList.add("done"), 3000);
        }

    }, [])

    return (
        <div>
            <div className="upload">
                <input onChange={handleChange} type="file" title="" id="img" className="drop-here" />
                <div className="text text-drop">drop here</div>
                <div className="text text-upload">uploading</div>
                <svg className="progress-wrapper" width="300" height="300">
                    <circle className="progress" r="115" cx="150" cy="150"></circle>
                </svg>
                <svg className="check-wrapper" width="130" height="130">
                    <polyline className="check" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                </svg>
                <div className="shadow"></div>
            </div>
        </div>
    )
}
