import React, { useState } from 'react';
import { CREATE_USER_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

    const addUser = () => {
        createUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
        })

        if (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <input type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} /> <br />
            <input type="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} /><br />
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /><br />
            <button onClick={addUser}>Add User</button>

        </div >
    )
}

export default Form