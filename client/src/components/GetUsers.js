import React, { useEffect, useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const GetUsers = () => {

    const { error, loading, data } = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        if (data) {

            setUsers(data.getAllUsers)
            console.log(users);
        }
    }, [data]);

    return (
        <>
            <div>GetUsers</div>
            {
                users.length > 0 && users.map((user) => {
                    return <>
                        <label>firstName: </label>
                        <strong>
                            {user.firstName}
                        </strong>
                        <br />
                        <strong>
                            -- lastName: {user.lastName}
                            -- email: {user.email}
                        </strong>
                        <br />
                    </>
                })
            }
        </>

    )
}

export default GetUsers