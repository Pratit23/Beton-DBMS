import React, { useState, useEffect } from 'react'
import TenderMap from './TenderMap'
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/newTenders.json'
import lonely from '../../../../images/Lottie/lonely.json'
import { availableTenders, myTenders, pastTenders } from '../../../../queries/query'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { Link } from 'react-router-dom';


const TenderSide = (props) => {

    const [currentTab, setCurrentTab] = useState(0)
    const [showTenders, setShowTenders] = useState(false)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: lonely,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        window.$(document).ready(function () {
            window.$('.collapsible').collapsible();
            window.$('.materialboxed').materialbox();

            window.$('.tabbar li a').on('click', function (e) {

                e.preventDefault();

                let that = window.$(this),
                    li = that.parent(),
                    ul = li.parent();

                if (!ul.hasClass('move') && !li.hasClass('active')) {
                    ul.children('li').removeClass('active');

                    ul.css('--x-n', li.position().left + li.outerWidth() / 2 + 'px');
                    li.addClass('move');
                    ul.addClass('move');

                    setTimeout(() => {
                        ul.removeClass('move');
                        li.removeClass('move').addClass('active');
                        ul.css('--x', li.position().left + li.outerWidth() / 2 + 'px');
                    }, 1200);
                }

            });
        });
    })

    console.log("Props in tenderside: ", props)

    return (
        <>
            {
                !showTenders ?
                    <div className="row">
                        <div className="col s8" style={{ height: '100vh' }}>
                            <div className="demo" id="main" style={{ overflowY: "auto" }} >
                                <div className="row">
                                    <div className="col s12" style={{ paddingTop: '40px' }}>
                                        <div className="frame">
                                            <ul className="tabbar" style={{ "--x-n": "81.133px", "--x": "81.133px" }}>
                                                <li className="active">
                                                    <a onClick={() => setCurrentTab(0)} className="box">
                                                        <div>
                                                            <svg>
                                                                <use xlinkHref="#box" />
                                                            </svg>
                                                            <em></em>
                                                        </div>
                                                    </a>
                                                    {
                                                        currentTab == 0 ?
                                                            <p className="center-align blue-text">New</p> :
                                                            <p className="center-align">New</p>
                                                    }
                                                </li>
                                                <li>
                                                    <a onClick={() => setCurrentTab(1)} className="home">
                                                        <div>
                                                            <svg>
                                                                <use xlinkHref="#home" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    {
                                                        currentTab == 1 ?
                                                            <p className="center-align blue-text">Active</p> :
                                                            <p className="center-align">Active</p>
                                                    }
                                                </li>
                                                <li>
                                                    <a onClick={() => setCurrentTab(2)} className="calendar">
                                                        <div>
                                                            <svg>
                                                                <use xlinkHref="#calendar" />
                                                            </svg>
                                                            <em></em>
                                                        </div>
                                                    </a>
                                                    {
                                                        currentTab == 2 ?
                                                            <p className="center-align blue-text">Past</p> :
                                                            <p className="center-align">Past</p>
                                                    }
                                                </li>
                                            </ul>
                                        </div>

                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                                            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="box">
                                                <path d="M4.2715356,6.86557078 C3.79533783,7.1301251 3.5,7.63205601 3.5,8.1768067 L3.5,15.8231933 C3.5,16.367944 3.79533783,16.8698749 4.2715356,17.1344292 L11.2715356,21.0233181 C11.7245694,21.2750036 12.2754306,21.2750036 12.7284644,21.0233181 L19.7284644,17.1344292 C20.2046622,16.8698749 20.5,16.367944 20.5,15.8231933 L20.5,8.1768067 C20.5,7.63205601 20.2046622,7.1301251 19.7284644,6.86557078 L12.7284644,2.97668189 C12.2754306,2.72499645 11.7245694,2.72499645 11.2715356,2.97668189 L4.2715356,6.86557078 Z"></path>
                                            </symbol>
                                            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="home">
                                                <path d="M3.66781808,10.0753614 C3.5610739,10.1702451 3.5,10.3062472 3.5,10.4490661 L3.5,20 C3.5,20.8284271 4.17157288,21.5 5,21.5 L19,21.5 C19.8284271,21.5 20.5,20.8284271 20.5,20 L20.5,10.4490661 C20.5,10.3062472 20.4389261,10.1702451 20.3321819,10.0753614 L12.9965458,3.55479593 C12.4282167,3.04961457 11.5717833,3.04961457 11.0034542,3.55479593 L3.66781808,10.0753614 Z"></path>
                                            </symbol>
                                            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="calendar">
                                                <path d="M5,4.5 C4.17157288,4.5 3.5,5.17157288 3.5,6 L3.5,19 C3.5,19.8284271 4.17157288,20.5 5,20.5 L19,20.5 C19.8284271,20.5 20.5,19.8284271 20.5,19 L20.5,6 C20.5,5.17157288 19.8284271,4.5 19,4.5 L5,4.5 Z"></path>
                                            </symbol>
                                        </svg>
                                        {
                                            currentTab != 1 && currentTab != 2 ?
                                                <>
                                                    {
                                                        currentTab == 0 && props.availableTenders && props.availableTenders.availableTenders && props.availableTenders.availableTenders.length != 0 ?
                                                            <div className="row" style={{ height: '100%', width: '100%', paddingTop: '25px' }}>
                                                                {
                                                                    console.log("Current tab is 0"),
                                                                    props.availableTenders.availableTenders.map((tender, key) => {
                                                                        return (
                                                                            <Link to={`/contractor/tender/${tender.id}`}>
                                                                                <div key={key} className="card-panel col s10 offset-s1" style={{ borderRadius: "24px", padding: "10px" }} >
                                                                                    <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                                                        <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                                                        </div>
                                                                                        <div className="col s9">
                                                                                            {tender.address.length > 50 ? <h5 className="black-text">{(tender.address).substring(0, 50)}...</h5> : <h5 className="black-text">{tender.address}</h5>}
                                                                                            <p className="grey-text" style={{ paddingTop: "8px" }} >{tender.amount} | {tender.endDate} | Click to know more</p>
                                                                                        </div>
                                                                                        <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }}>➜</div>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            :
                                                            <Lottie options={defaultOptions1}
                                                                height={300}
                                                                width={500}
                                                                isStopped={false}
                                                                isPaused={false}
                                                                style={{}}
                                                            />
                                                    }
                                                </> : null
                                        }
                                        {
                                            currentTab != 0 && currentTab != 2 ?
                                                <>
                                                    {
                                                        currentTab == 1 && props.myTenders && props.myTenders.myTenders && props.myTenders.myTenders.length != 0 ?
                                                            <div className="row" style={{ height: '100%', width: '100%', paddingTop: '25px' }}>
                                                                {
                                                                    console.log("Current tab is 1"),
                                                                    props.myTenders.myTenders.map((tender, key) => {
                                                                        return (
                                                                            <Link to={`/contractor/tender/${tender.id}`}>
                                                                                <div key={key} className="card-panel col s10 offset-s1" style={{ borderRadius: "24px", padding: "10px" }} >
                                                                                    <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                                                        <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                                                        </div>
                                                                                        <div className="col s9">
                                                                                            {tender.address.length > 50 ? <h5 className="black-text">{(tender.address).substring(0, 50)}...</h5> : <h5 className="black-text">{tender.address}</h5>}
                                                                                            <p className="grey-text" style={{ paddingTop: "8px" }} >{tender.amount} | {tender.endDate} | Click to know more</p>
                                                                                        </div>
                                                                                        <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }}>➜</div>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            : <Lottie options={defaultOptions1}
                                                                height={300}
                                                                width={500}
                                                                isStopped={false}
                                                                isPaused={false}
                                                                style={{}}
                                                            />
                                                    }
                                                </> : null
                                        }
                                        {
                                            currentTab != 0 && currentTab != 1 ?
                                                <>
                                                    {
                                                        currentTab == 2 && props.pastTenders && props.pastTenders.pastTenders ?
                                                            <div className="row" style={{ height: '100%', width: '100%', paddingTop: '25px' }}>
                                                                {
                                                                    console.log("Current tab is 2"),
                                                                    props.pastTenders.pastTenders.map((tender, key) => {
                                                                        return (
                                                                            <Link to={`/contractor/tender/${tender.id}`}>
                                                                                <div key={key} className="card-panel col s10 offset-s1" style={{ borderRadius: "24px", padding: "10px" }} >
                                                                                    <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                                                        <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                                                        </div>
                                                                                        <div className="col s9">
                                                                                            {tender.address.length > 50 ? <h5 className="black-text">{(tender.address).substring(0, 50)}...</h5> : <h5 className="black-text">{tender.address}</h5>}
                                                                                            <p className="grey-text" style={{ paddingTop: "8px" }} >{tender.amount} | {tender.endDate} | Click to know more</p>
                                                                                        </div>
                                                                                        <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }}>➜</div>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            : <Lottie options={defaultOptions1}
                                                                height={300}
                                                                width={500}
                                                                isStopped={false}
                                                                isPaused={false}
                                                                style={{}}
                                                            />
                                                    }
                                                </> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s4" style={{ height: '100vh' }}>
                            <Lottie options={defaultOptions}
                                height={700}
                                width={400}
                                isStopped={false}
                                isPaused={false}
                                style={{ marginTop: '15vh' }}
                            />
                        </div>
                    </div>
                    :
                    null
            }
        </>
    )
}
export default compose(
    graphql(availableTenders, {
        name: "availableTenders",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    id: temp
                }
            }
        }
    }),
    graphql(myTenders, {
        name: "myTenders",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    id: temp
                }
            }
        }
    }),
    graphql(pastTenders, {
        name: "pastTenders",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    id: temp
                }
            }
        }
    }),
)(TenderSide)
