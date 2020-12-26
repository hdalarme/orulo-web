import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import UserDataService from "../../services/user.service";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        await UserDataService.login(email, password);

        setSubmitted(true);
        setEmail('');
        setPassword('');
    }

    return (
        <div className="submit-form">
            {submitted ? (
            <Redirect to="/" />
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
                                <button 
                                    type="submit"
                                    className="btn btn-primary btn-block" >
                                    Login
                                </button>
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

export default Login;