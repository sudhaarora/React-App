import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';


function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState('');
    const [id, setID] = useState(null);

    const updateAPIData = () => {
        axios.post(`https://614c14ede4cc2900179eb27e.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        })
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, [])
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
            </Form.Field>
            <Button type='submit' onClick={updateAPIData}>Update</Button>
        </Form>
        </div >
    )
}

export default Update
