import React from 'react'
import Sidenav from './Sidenav'
import RefreshHome from './RefreshHome'
import { Redirect } from 'react-router-dom'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { decrypt } from '../../queries/query'

const Homepage = (props) => {
    if((!localStorage.getItem('token')) || (props && props.decrypt && props.decrypt.loading == false && (!props.decrypt.decrypt || !props.decrypt.decrypt.id)) ) return <Redirect to='/login' />
    return (
        <div>
            <Sidenav />
            <RefreshHome />
        </div>
    )
}

export default compose(
    graphql(decrypt, {
        name: "decrypt",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    token: temp
                }
            }
        }
    })
)(Homepage)