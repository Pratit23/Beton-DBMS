import React from 'react'

const AdvertismentCard = () => {
    return (
        <div className="col s12 m4" >
            <div className="card sticky-action" style={{
                borderRadius: "24px"
            }} >
                <div className="card-image">
                    <img className="activator" style={{
                        borderRadius: "24px 24px 0 0"
                    }} src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg" />
                </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
        </div>
    )
}

export default AdvertismentCard
