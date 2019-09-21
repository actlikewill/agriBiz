import React from 'react';
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import User20 from "@carbon/icons-react/lib/user/16";
import { Link } from 'react-router-dom';
import navigateTo from '../../routes/nav';
import {
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderGlobalAction,
    HeaderGlobalBar
} from "carbon-components-react";


const NavHeader = () => (
    <>
        <Header aria-label="Header">
            <HeaderName href="/" prefix='Agronome'>
                AIRES
            </HeaderName>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="User" onClick={() => navigateTo('/profile')}>
                    <User20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="App Switcher">
                    <AppSwitcher20 />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>

    </>
);

export default NavHeader;
