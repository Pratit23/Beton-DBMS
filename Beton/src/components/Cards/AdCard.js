import React, { useEffect, useState } from 'react';
import test from '../../images/astronaut.png'
import './AdCard.css';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { getRandomAd, updateAdd } from '../../queries/query';


var idey = null;
const AdCard = (props) => {
    const [start, setStart] = useState(new Date() * 1);
    useEffect(() => {
        return () => {
            if (window.$(".homepage_cad").length == 0) {
                // console.log("going now")
            } else {
                // do ze thing
                let end = new Date() * 1;
                let diff = end - start;
                if (idey != null) {
                    (async () => {
                        await props.updateAdd({
                            variables: {
                                id: idey,
                                screentime: diff
                            }
                        })
                        console.log("Updated!")
                        idey = null;
                    })()
                }
            }
        }
    }, [])

    useEffect(() => {
        if (props.getRandomAd && !props.getRandomAd.loading && props.getRandomAd.getRandomAd) {
            idey = props.getRandomAd.getRandomAd.id;
        }
    }, [props])

    return (
        <>
            {
                props.getRandomAd && !props.getRandomAd.loading && props.getRandomAd.getRandomAd ? (
                    <div className="homepage_cad">
                        <div className="ad_card row">
                            <div className="col s6">
                                <a href={props.getRandomAd.getRandomAd.link}
                                    target="__blank" style={{ textDecoration: "none", color: "gray" }} className="adLink" >
                                    <img src={props.getRandomAd.getRandomAd.image} alt="Ad" style={{ width: "100%", height: "auto" }} />
                                </a>
                            </div>
                            <div className="col s5">
                                <a href={props.getRandomAd.getRandomAd.link}
                                    target="__blank" style={{ textDecoration: "none", color: "gray" }} className="adLink" >
                                    <p>{props.getRandomAd.getRandomAd.title}</p>
                                </a>
                            </div>
                            <div className="col s1">
                                <i class="material-icons" onClick={async () => {
                                    let end = new Date() * 1;
                                    let diff = end - start;
                                    await props.updateAdd({
                                        variables: {
                                            id: props.getRandomAd.getRandomAd.id,
                                            screentime: diff
                                        }
                                    })
                                    window.$(".homepage_cad").remove();
                                }} >cancel</i>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default compose(
    graphql(getRandomAd, { name: "getRandomAd" }),
    graphql(updateAdd, { name: "updateAdd" }),
)(AdCard)
