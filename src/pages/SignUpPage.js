import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const SignUpPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");

    const onSubmit = async (e) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/login")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
    }

    return (
        <div>
            <h1>Leaders Playbook</h1>
            <form>
                <div>
                    <label htmlFor="email address">
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
                    <label htmlFor="password">
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
                    onClick={onSubmit}
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