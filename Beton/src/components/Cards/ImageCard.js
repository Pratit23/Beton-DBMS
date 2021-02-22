import React from 'react';
import './ImageCard.scss';

const ImageCard = ({ src, filename, size, uploaded }) => {
    return (
        <section className="containerImgCard">
            <div className="ImgCard">
                <div className="contentImgCard">
                    <img className="logoImgCard" src={src} alt="Selected Image" />
                        <h6>{filename}</h6>
                        <div className="hover_content">
                            <p>
                                Size: {size} kb <br />
                                Uploaded on: {JSON.stringify(uploaded)}
                            </p>
                        </div>
                </div>
            </div>       
        </section>
    )
}

export default ImageCard
