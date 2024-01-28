import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { db } from "../utils/firebase";

const SignUpPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");
    const [username, setUsername] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });

        const currentUser = auth.currentUser;
        updateProfile(currentUser, {
            displayName: username
        }).then(() => {
            console.log("Profile updated!");
        }).catch((error) => {
            console.error(error);
        });

        try {
            await setDoc(doc(db, "users", username[0]), {
                username: username,
                email: email,
                password: password,
                uid: currentUser.uid
            });
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <div>
            <h1>Leaders Playbook</h1>
            <form>
                <div>
                    <label htmlFor="email address">
                        Email Address{' '}
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
                        Username{' '}
                    </label>
                    <input 
                        type="username"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="Username"
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        password{' '}
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

            <p>
                Already have an account?{' '}
                <NavLink to="/">
                    Sign in
                </NavLink>
            </p>
        </div>
    )
}

export default SignUpPage;