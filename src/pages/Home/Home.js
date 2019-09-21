import React, { Component } from 'react';
import logo from './img/logo.svg';
import bg from './img/bg.svg';
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'

};

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {showForm: 'Sign In'}
    }

    toggleForm = () =>  {
        const form = document.getElementById('show-form');
        const switchForm = this.state.showForm  === 'Sign In' ? 'Sign Up' : 'Sign In';
        this.setState({showForm: switchForm});
    };

    linkLabel = () => {
        return this.state.showForm  === 'Sign In' ? 'Sign Up' : 'Sign In';
    };


    render() {
        const { showForm } = this.state;


        return (
            <>
                <div className="bx--grid--full-width login-main" style={styles}>
                    <div className="bx--row">
                        <div className="bx--col-lg-11 bx--col-md-8 left item">
                            <div className="logo">
                                <img src={logo} alt="agronome-logo"/>
                            </div>
                        </div>
                        <div className="bx--col-lg-5 bx--col-md-8 right item animate-in">
                            <div className="welcome">
                                <div className="bx--row login-top-links">
                                    <div className="sign-up-link">
                                        <a onClick={this.toggleForm} href="#">{this.linkLabel()}</a>
                                    </div>
                                </div>
                                <div className="bx--row login-form">
                                    <div className="login-form-container" id="show-form">
                                        {   showForm === 'Sign Up'
                                            ?  <SignUpForm showForm={this.state.showForm} toggleForm={this.toggleForm}/>
                                            :  <SignInForm showForm={this.state.showForm} toggleForm={this.toggleForm}/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;
