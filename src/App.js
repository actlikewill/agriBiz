import React, { Component } from 'react';
import { Router } from "react-router-dom";
import Routes from './routes';
import history from './routes/history';
import './App.scss';



class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Routes />
                </Router>
            </div>
        );
    }
}

export default App;
