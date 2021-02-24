import React, { useEffect } from 'react'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { Redirect } from 'react-router-dom';
import { decrypt } from '../../queries/query';
import HoveredLogin from './Hover/HoveredLogin';

const SignIn = (props) => {

    if(localStorage.getItem('token') && (props && props.decrypt && props.decrypt.loading == false && props.decrypt.decrypt && props.decrypt.decrypt.id) ) return <Redirect to='/homepage' />


    return (
        <>
            <HoveredLogin  props={props} />
        </>
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
)(SignIn)
