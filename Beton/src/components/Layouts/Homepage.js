import React from 'react'
import Sidenav from './Sidenav'
import RefreshHome from './RefreshHome'
import { Redirect } from 'react-router-dom'

const Homepage = (props) => {
    if(!localStorage.getItem('token')) return <Redirect to='/login' />
    return (
        <div>
            <Sidenav />
            <RefreshHome />
        </div>
    )
}

export default Homepage