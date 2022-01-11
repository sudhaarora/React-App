import axios from "axios";
import React, {useState} from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';


const Create = () => {
    // Let's create useState
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    // function : post data
    const postData = () => {
        axios.post(`https://614c14ede4cc2900179eb27e.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
    }

    return (
        <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions'
            onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button type='submit' onClick={postData}>Submit</Button>
    </Form>
    )
}

export default Create;