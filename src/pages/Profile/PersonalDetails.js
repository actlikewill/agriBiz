import React, { useState, useEffect } from 'react';
import {
    Form, TextInput
} from 'carbon-components-react';

import { useFormInput, getValues } from './FormHooks';
import Button from "carbon-components-react/es/components/Button/Button";

const sampleUser = {
    firstName: 'Joe',
    secondName: 'Mkulima',
    lastName: 'Mkarimu'
};



const PersonalDetails = ({openModal}) => {

    const [user, setUser] = useState(sampleUser);
    // useEffect(() => setUser(sampleUser));

    const firstName = useFormInput( user && user.firstName, 'firstName', openModal);
    const secondName = useFormInput( user && user.secondName, 'secondName', openModal);
    const lastName = useFormInput( user && user.lastName, 'lastName', openModal);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(getValues(firstName, secondName, lastName));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className="bx--grid bx--grid--full-width">
                <div className="profile-details-heading">
                    <h1>Personal Information</h1>
                </div>
                <div className="bx--row profile-details-input">
                    <div className="bx--col-lg input-class">
                        <TextInput {...firstName} onClick={() => openModal()} labelText="First Name:" id='first-name' />
                    </div>
                    <div className="bx--col-lg">
                        <TextInput {...secondName} labelText="Second Name:" id='second-name' />
                    </div>
                    <div className="bx--col-lg">
                        <TextInput {...lastName} labelText="Last Name:" id='last-name' />
                    </div>
                </div>
                <div className="bx--row profile-details-input">
                    <div className="bx--col-lg">
                        <TextInput labelText="ID/Passport Number:" id='id-number' />
                    </div>
                    <div className="bx--col-lg">
                        <TextInput labelText="Gender:" id='gender' />
                    </div>
                    <div className="bx--col-lg">
                        <TextInput labelText="Date of Birth:" id='d-o-b' />
                    </div>
                </div>
                <div className="profile-details-heading">
                    <h1>Contact Information</h1>
                </div>
                <div className="bx--row profile-details-input">
                    <div className="bx--col-lg input-class">
                        <TextInput labelText="Phone Number:" id='id-number' />
                    </div>
                    <div className="bx--col-lg">
                        <TextInput labelText="Mobile Number:" id='gender' />
                    </div>
                    <div className="bx--col-lg">
                        <TextInput labelText="Email" id='d-o-b' />
                    </div>
                </div>
                <div className="profile-details-heading">
                    <h1>Account Information</h1>
                </div>
                <div className="bx--row">
                    <div className="username input bx-col-4">
                        <TextInput labelText="Username: " id='user-name' />
                    </div>
                </div>
                <div className="bx--row">
                    <div className="username input bx-col-4">
                        <TextInput labelText="Current Email: " id='user-name' />
                    </div>
                </div>
            </div>
        </Form>
    );

};

export default PersonalDetails;

//TODO: Create prompt for editing and saving fields
