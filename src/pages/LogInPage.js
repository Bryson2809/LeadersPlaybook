import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../utils/firebase";

const LogInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user);
            navigate("/home");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }   

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="email address">
                        <input 
                            type="email"
                            label="Email Address"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            required
                            placeholder="Email Address"
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="password">
                        <input 
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            required
                            placeholder="Password"
                        />
                    </label>
                </div>

                <button
                type="submit"
                onClick={onSubmit}
                >
                    Log in
                </button>
            </form>

            <p>
                Don't have an account?{' '}
                <NavLink to="/signup">
                    Sign up!
                </NavLink>
            </p>
        </div>
    );
}

export default LogInPage;