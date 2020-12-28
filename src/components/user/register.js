import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import UserDataService from "../../services/user.service";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        await UserDataService.register(email, password, password_confirmation);

        setSubmitted(true);
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
    }

    return (
        <div className="submit-form">
            {submitted ? (
                <Redirect to="/login" />
            ) : (
            <div className="form-group row">
                <div className="col-md-3"></div>

                <div className="col-md-6">
                    <div className="card card-header">

                        <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="rounded mx-auto d-block"
                        />

                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input name="email"
                                type="text"
                                className="form-control"
                                id="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input name="password"
                                type="password"
                                className="form-control"
                                id="password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password_confirmation">Password</label>
                                <input name="password_confirmation"
                                type="password"
                                className="form-control"
                                id="password_confirmation"
                                required
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                value={password_confirmation} />
                            </div>

                            <div className="form-group">
                                <button 
                                    type="submit"
                                    className="btn btn-primary btn-block" >
                                    Register
                                </button>
                            </div>

                            <div className="form-group">
                            <Link to={"/login"} className="nav-link"> Login </Link>
                            </div>

                        </form>

                    </div>
                </div>
            
                <div className="col-md-3"></div>
            </div>
            )}
        </div>
    );


}

export default Register;