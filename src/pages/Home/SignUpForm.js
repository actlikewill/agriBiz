import React, {Component} from 'react';


class SignUpForm extends Component {
    render() {
        const {showForm, toggleForm} = this.props;
        return (
            <form className="">
                <div className="login-input login-heading">
                    <h1 className="login-form-heading">{showForm}</h1>
                    <p className="create-account-text">
                        or <a onClick={toggleForm} className="create-account-link" href="#">login to my account.</a>
                    </p>
                </div>
                <div className="login-input">
                    <input placeholder="Email"/>
                </div>
                <div className="login-input">
                    <input placeholder="Username"/>
                </div>
                <div className="login-input">
                    <input placeholder="Password"/>
                </div>
                <div className="login-input">
                    <input placeholder="Repeat Password"/>
                </div>
                <div className="login-input">
                    <button className="login-button" placeholder="Password"
                            type="submit">SIGN ME UP
                    </button>
                </div>
            </form>
        );
    }
}

export default SignUpForm;
