import React, { useEffect, useState } from 'react'
import Sidenav from '../AdminSidenav'
import { allBaseReports } from '../../../../queries/query'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { Icon } from 'rsuite'
import AddTenderMap from '../AdminComponents/AddTenderMap'

var lo = ''
//var sortedReports = []

function AddTender(props) {

    const [showAll, setShowAll] = useState(true)
    const [allReports, setAllReports] = useState({})
    const [sortedReports, setSortedReports] = useState([])

    const searchZip = () => {
        setSortedReports([])
        console.log("Search zip fired")
        props.allBaseReports.allBaseReports.map((place, key) => {
            var myRegexExp = /[0-9]{6}/gm;
            let zipCode = myRegexExp.exec(place.address)
            console.log("address: ", place.address)
            console.log("zip code: ", zipCode)
            if (zipCode != null && lo == zipCode[0]) {
                //sortedReports.push(place)
                setSortedReports(prevRep => [...prevRep, place])
                console.log("Running")
            }
        })
        console.log("Sorted Reports: ", sortedReports)
        setShowAll(false)
    }

    useEffect(() => {
        if (props.allBaseReports && props.allBaseReports.allBaseReports) {
            props.allBaseReports.allBaseReports.map((place, key) => {
                var myRegexExp = /[0-9]{6}/gm;
                let zipCode = myRegexExp.exec(place.address)
                allReports[zipCode] = null
                console.log("Temp Places: ", allReports)
            })
        }

        window.$(document).ready(function () {
            window.$('input.autocomplete').autocomplete({
                data: {
                    ...allReports
                },
                onAutocomplete: function (txt) {
                    lo = txt
                    console.log("Lo: ", lo)
                },
            });
        });
    }, [props.allBaseReports])

    console.log(props)

    return (
        <div>
            <Sidenav />
            <div className="row">
                <div className="col s8" style={{ height: '100vh' }}>
                    <div className="demo" id="main" style={{ overflowY: "auto" }} >
                        <div className="row">
                            <div className="col s12">
                                <AddTenderMap />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s4" style={{ height: '100vh' }}>
                    <div className="row">
                        <div className='col s12'>
                            <h3 style={{ paddingLeft: '20px', paddingTop: '20px' }}>All Reports</h3>
                            <div className="row">
                                <div className="col s12">
                                    <div className="row">
                                        <div className="input-field col s8">
                                            <i className="material-icons prefix">search</i>
                                            <input type="text" id="autocomplete-input" className="autocomplete" />
                                            <label htmlFor="autocomplete-input">Search Zip Codes</label>
                                        </div>
                                        <div className="col s1" style={{ paddingLeft: '0', paddingTop: '30px' }}>
                                            <Icon onClick={() => setShowAll(true)} className="black-text" icon='close' />
                                        </div>
                                        <div className="col s3" style={{ paddingLeft: '0' }}>
                                            <div onClick={() => searchZip()} className="btn" style={{ backgroundColor: '#0099FF', borderRadius: '24px', marginTop: '24px' }}>Search</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col s12'>
                            {
                                showAll && props.allBaseReports && props.allBaseReports.allBaseReports ?
                                    <>
                                        {
                                            props.allBaseReports.allBaseReports.map((place, key) => {

                                                return (
                                                    <div className="card-panel col s10 offset-s1" style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${place.image})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">{(place.address).substring(0, 50)}...</h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >By: {place.userID.name} | {place.reportedAt} | Click to know more</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                    :
                                    <>
                                        {
                                            sortedReports.map((report, index) => {
                                                return (
                                                    <div className="card-panel col s10 offset-s1" style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">{(report.address).substring(0, 10)}</h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >50,00,000 | May 2021 | Click to know more</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(allBaseReports, {
        name: "allBaseReports",
    })
)(AddTender)
