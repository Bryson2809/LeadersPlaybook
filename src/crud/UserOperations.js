import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    createUserWithEmailAndPassword
  } from "firebase/auth";