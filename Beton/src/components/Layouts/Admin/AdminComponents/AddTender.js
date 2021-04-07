import React, { useEffect, useState } from 'react'
import Sidenav from '../AdminSidenav'
import { allBaseReports, addTender } from '../../../../queries/query'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { Icon } from 'rsuite'
import AddTenderMap from '../AdminComponents/AddTenderMap'
import GeneralInput from '../../../Buttons/GeneralInput'
import GeneralDOB from '../../../Buttons/GeneralDOB1'
import M from 'materialize-css'

var lo = ''
//var sortedReports = [] 

function AddTender(props) {

    const [showAll, setShowAll] = useState(true)
    const [allReports, setAllReports] = useState({})
    const [sortedReports, setSortedReports] = useState([])
    const [mapData, setMapData] = useState(null)
    const [showDirec, setShowDirec] = useState(true)
    const [numPotholes, setNumPotholes] = useState(null)
    const [onRoadPotholes, setOnRoadPotholes] = useState(null)
    const [encoded, setEncoded] = useState(null)

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

    const getData = (data) => {
        console.log("Get data is working: ", data)
        setMapData(data)
        console.log("Map data: ", mapData)
    }

    const getNumPotholes = (data, routePotholes) => {
        console.log("Num of potholes: ", data)
        setNumPotholes(data)
        setOnRoadPotholes(routePotholes)
    }

    const resetInput = () => {
        setShowAll(true)
        document.getElementById('autocomplete-input').value = ''
    }

    useEffect(() => {
        console.log("Map data useffect")
    }, [mapData])

    const getEncoded = (data) => {
        setEncoded(data)
        console.log('Encoded data: ', data)
    }

    const handleAddTender = async () => {
        let day = document.querySelector('.day').value
        console.log("Day: ", day)
        let month = document.querySelector('.month').value
        console.log("Month: ", month)
        let year = document.querySelector('.year').value
        console.log("Year: ", year)
        let amount = document.getElementById('tender-cost').value
        console.log("Amount: ", amount)
        let nameOfWork = document.getElementById('tender-title').value
        console.log("Name of work: ", nameOfWork)
        let endDate = `${day}/${month}/${year}`;
        console.log("End Date: ", endDate)
        var address = mapData.start_address + ' to ' + mapData.end_address
        console.log("Address: ", address)
        var source = mapData.start_location.lat + ', ' + mapData.start_location.lng
        console.log("Source: ", source)
        var destination = mapData.end_location.lat + ', ' + mapData.end_location.lng
        console.log("Destination: ", destination)
        var baseReports = onRoadPotholes.isOnLinev2
        console.log("Base reports: ", baseReports)

        let res = await props.addTender({
            variables: {
                endDate,
                address,
                source,
                destination,
                baseReports,
                amount,
                nameOfWork,
                encoded
            }
        })
        if (res && res.data && res.data.addTender) {
            M.toast({ html: "Wohoo! Tender successfully created!" });
            setShowDirec(false)
            setMapData(null)
        } else {
            M.toast({ html: "Something went wrong, please try again!" });
        }

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

    const cancel = () => {
        console.log("Cancel running")
        setShowDirec(false)
        setMapData(null)
    }

    return (
        <div>
            <Sidenav />
            <div className="row" style={{ height: "100%" }}>
                <div className="col s8" style={{ height: '100%' }}>
                    <div className="demo" id="main" style={{ overflowY: "auto" }} >
                        <div className="row" >
                            <div className="col s12" style={{ paddingTop: '2vh', paddingLeft: '2vw', paddingRight: '2vw' }}>
                                <AddTenderMap getData={getData} showDirec={showDirec} getNumPotholes={getNumPotholes} getEncoded={getEncoded} />
                            </div>
                            <div className="col s12">
                                {
                                    mapData ?
                                        <div className="card-panel col s10 offset-s1" style={{ borderRadius: "24px", padding: "10px", height: '45vh' }} >
                                            <div className="row" style={{ margin: "5px -.75rem" }} >
                                                <div className="col s5">
                                                    <h4 className="center-align">Selected route</h4>
                                                    <div style={{ backgroundColor: '#F5F5F5', marginLeft: '1vw', borderRadius: '24px', padding: '10px' }}>
                                                        <p style={{ paddingTop: '1vh' }}>From: Kudal</p>
                                                        <p>To: Malvan</p>
                                                        <p>Distance: {mapData.distance}</p>
                                                        <p>{mapData.start_address}</p>
                                                        <p>{mapData.end_address}</p>
                                                        <p>No. of potholes: {numPotholes}</p>
                                                    </div>
                                                </div>
                                                <div className="col s7">
                                                    <h4 className="center-align">Enter details</h4>
                                                    <div style={{ backgroundColor: '#F5F5F5', marginLeft: '3vw', marginRight: '3vw', borderRadius: '24px', padding: '20px' }}>
                                                        <GeneralInput placeholder="Tender Title" classy="" type="text" id="tender-title" />
                                                        <br />
                                                        <GeneralInput placeholder="Estimated Cost" classy="" type="text" id="tender-cost" />
                                                        <br />
                                                        <GeneralDOB />
                                                        <br />
                                                        <GeneralInput placeholder="ATTN OF" classy="" type="text" id="tender-title" />
                                                    </div>
                                                </div>
                                                <div className="col s12 right-align" style={{ paddingRight: '80px', paddingTop: '20px' }}>
                                                    <div class="btn red" onClick={() => cancel()} style={{ marginRight: '10px', borderRadius: '24px' }}><i class="material-icons right">close</i>Cancel</div>
                                                    <div class="btn blue" onClick={() => handleAddTender()} style={{ borderRadius: '24px' }}><i class="material-icons right">arrow_forward</i>Submit</div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="card-panel col s10 offset-s1" style={{ borderRadius: "24px", padding: "10px", height: '40vh' }} >
                                            <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                <div className="col s12 center-align" style={{ paddingTop: '15vh' }}>
                                                    <h4>Place markers to view data</h4>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s4" style={{ height: '100%', overflow: "auto" }}>
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
                                            <Icon onClick={() => resetInput()} className="black-text" icon='close' />
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
                                                    <div key={key} className="card-panel col s10 offset-s1" style={{ borderRadius: "24px", padding: "10px" }} >
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
    }),
    graphql(addTender, {
        name: "addTender"
    })
)(AddTender)
