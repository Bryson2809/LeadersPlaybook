import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { register } from "../utils/firebase";

const SignUpPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");

    const onSubmit = async (props) => {
        register(props.email, props.password);
    }

    return (
        <div>
            <h1>Leaders Playbook</h1>
            <form>
                <div>
                    <label htmlfor="email address">
                        Email Address
                    </label>
                    <input
                        type="email"
                        label="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email Address"
                    />
                </div>

                <div>
                    <label htmlfor="password">
                        password
                    </label>
                    <input 
                        type="password"
                        label="Current Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                    />
                </div>

                <button
                    type="submit"
                    onClick={onSubmit({email,password})}
                >
                    Sign up
                </button>
            </form>

            {/* <p>
                Already have an account?{' '}
                <NavLink to="/login">
                    Sign in
                </NavLink>
            </p> */}
        </div>
    )
}

export default SignUpPage;