import React from 'react';
import {
    TextInput
} from 'carbon-components-react';



const FarmDetails = () => (
    <div className="bx--grid bx--grid--full-width">
        <div className="profile-details-heading">
            <h1>Farm Details</h1>
        </div>
        <div className="bx--row profile-details-input">
            <div className="bx--col-lg">
                <TextInput labelText="Farm Location" id='first-name' />
            </div>
            <div className="bx--col-lg">
                <TextInput labelText="Main Crop:" id='second-name' />
            </div>
            <div className="bx--col-lg">
                <TextInput labelText="Route:" id='last-name' />
            </div>
        </div>
        <div className="profile-details-heading">
            <h1>Farm Location</h1>
        </div>

    </div>
);

export default FarmDetails;
