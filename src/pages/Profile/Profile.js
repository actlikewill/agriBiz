import React, { Component } from 'react';
import {
    Button,
    Content,
    ContentSwitcher,
    Switch
} from "carbon-components-react";
import { ToastNotification } from "carbon-components-react";
import EmailIcon from "@carbon/icons-react/lib/email/20";
import PhoneIcon from "@carbon/icons-react/lib/phone/20";
import LocationIcon from "@carbon/icons-react/lib/location/20";
import PersonalDetails from "./PersonalDetails";
import FarmDetails from "./FarmDetails";
import Subscriptions from "./Subscriptions";



class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            profileDetailTab: 'personal',
            showModal: false
        }
    }

    renderProfileHeader = () => {
        return (
            <div className='bx--row'>
                <div className="bx--col-lg-12 bx--offset-lg-4">
                    <h1>John Mkulima</h1>
                    <h5>Uasin Gishu</h5>
                </div>
            </div>
            )

    };

    renderProfileButtons = () => {
        const props = {
            contentSwitcher: () => ({
                onChange: (e) => {this.setState({profileDetailTab: e.name})},
            }),
            switch: () => ({

            }),
        };

        const switchProps = props.switch();
        return (
            <ContentSwitcher {...props.contentSwitcher()} className="profile-buttons">
                <Switch name="personal" text="Personal" data-target=".personal" {...switchProps} />
                <Switch name="farm" text="Farm" data-target=".farm" {...switchProps} />
                <Switch name="subscriptions" text="Subscriptions" data-target=".subscriptions" {...switchProps} />
            </ContentSwitcher>
        );
    };

    renderProfileSideBar = () => {
        return (
            <div className="">
                <div className="profile-avatar">
                    <img alt="avatar" src="https://i2.wp.com/www.ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png"/>
                </div>
                <div className="profile-summary">
                    <div className="profile-summary-item"><span><EmailIcon className="profile-summary-icon"/></span>johnmkulima@email.com</div>
                    <div className="profile-summary-separator" />
                    <div className="profile-summary-item"><span><PhoneIcon className="profile-summary-icon"/></span>+254 724 000 112</div>
                    <div className="profile-summary-separator" />
                    <div className="profile-summary-item"><span><LocationIcon className="profile-summary-icon"/></span>Uasin Gishu</div>
                </div>
            </div>
        );
    };

    openModal = () => {
        this.setState(() => ({ showModal: true}));
    };

    closeModal = () => {
        this.setState(() => ({ showModal: false}));
    };

    renderProfileDetails = () => {
        const {profileDetailTab} = this.state;
        return (
            <div className='bx--col-lg'>
                <div hidden={profileDetailTab !== 'personal'} className="personal">
                    <PersonalDetails openModal={this.openModal}/>
                </div>
                <div hidden={profileDetailTab !== 'farm'} className="farm">
                    <FarmDetails/>
                </div>
                <div hidden={profileDetailTab !== 'subscriptions'} className="subscriptions">
                    <Subscriptions/>
                </div>
            </div>
        );
    };

    notificationProps = () => ({
        kind: 'success',
        lowContrast: false,
        role: 'alert',
        title: 'Welcome to your Profile.',
        subtitle: 'You can edit any entry simply by clicking on it.',
        iconDescription: 'close',
        caption: '',
        hideCloseButton: false,
        onCloseButtonClick: () => {console.log('close notification')},
    });

    render () {
        const {showModal} = this.state;
        return (
        <Content className="profile-wrapper">
            <ToastNotification className="toast" {...this.notificationProps()} />
            <div className="bx--grid--full-width">
                <div className="bx--row">
                    <div className="bx--col profile-header">
                        {this.renderProfileHeader()}
                    </div>
                </div>
                <div className="bx--row">
                    <div className="bx--col-lg-4  bx--col-md-4 profile profile-sidebar">
                        {this.renderProfileSideBar()}
                    </div>
                    <div className="bx--col-lg-12 bx--col-md-4 profile profile-content">
                        <div className="bx--row profile-content-tabs">
                            {this.renderProfileButtons()}
                        </div>
                        <div className="bx--row profile-content-details">
                            {this.renderProfileDetails()}
                        </div>
                    </div>
                </div>
                <div className="animation-wrapper">
                {showModal ?
                    <div className="confirm-edit-wrapper">
                        <div className="confirm-edit">
                            <Button className="profile-discard-changes-button" onClick={() => this.closeModal()} size='normal'>Discard Changes</Button>
                            <Button className="profile-keep-changes-button" size='normal'>Keep Changes</Button>
                        </div>
                    </div>
                    : null
                }
                </div>

            </div>
        </Content>
    )}
}

//TODO: Create a theme mixing for setting color variables

export default Profile;
