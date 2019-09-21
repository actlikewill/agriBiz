import React, {Component} from 'react';
import navigateTo from '../../routes/nav'

class SignInForm extends Component {
    render() {
        const {showForm, toggleForm} = this.props;
        return (
            <form onSubmit={() => navigateTo('/profile')} className="">
                <div className="login-input login-heading">
                    <h1 className="login-form-heading">{showForm}</h1>
                    <p className="create-account-text">
                        or <a onClick={toggleForm} className="create-account-link" href="#">create an account.</a>
                    </p>
                </div>
                <div className="login-input">
                    <input placeholder="Username"/>
                </div>
                <div className="login-input">
                    <input placeholder="Password"/>
                </div>
                <div className="login-input">
                    <button className="login-button" placeholder="Password"
                            type="submit">LOGIN
                    </button>
                </div>
                <a className="create-account-link" href="#">Forgot your password?</a>
            </form>
        );
    }
}

export default SignInForm;
