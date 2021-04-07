import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { users } from '../../../../queries/query';


const RecentUser = (props) => {
    return (
        <div className="row">
            {
                props.users && !props.users.loading && props.users.users ? (
                    props.users.users.slice(0, 10).map((u) => {
                        return (
                            <div className="chip" style={{ margin: "5px 10px" }} >
                                <img src={u.profile} alt="Profile Person" />
                                {u.name}
                            </div>
                        )
                    })
                ) : null
            }
        </div>
    )
}

export default compose(
    graphql(users, { name: "users" })
)(RecentUser)
