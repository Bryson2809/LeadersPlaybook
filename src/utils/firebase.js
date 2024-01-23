import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    createUserWithEmailAndPassword
  } from "firebase/auth";
//   import {
//     collection,
//     getFirestore,
//     addDoc,
//     getDocs,
//     updateDoc,
//     doc,
//     getDoc,
//     setDoc,
//     arrayUnion,
//     deleteDoc,
//   } from "firease/firestore";

  export const firebaseConfig = {
    apiKey: "AIzaSyA917SHi6_5Kp2fH-IZX5zPkr3TnivT8pE",
    authDomain: "playbook-34373.firebaseapp.com",
    projectId: "playbook-34373",
    storageBucket: "playbook-34373.appspot.com",
    messagingSenderId: "933715816117",
    appId: "1:933715816117:web:466dbc82b9cf8648bdd8fc",
    measurementId: "G-09QCH5RT4Q"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  //const analytics = getAnalytics(app);
  //const db = getFirestore(app);

  export const register = async ({ email, password }) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    } catch (e) {
        console.log(e);
        return false;
    }
  }

  export const onSubmit = async (e) => {
    //e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, e.email, e.password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });
  }

  const login = async ({ email, password }) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return user;
    } catch (e) {
        return false;
    }
  }

  const isUserSignedIn = async () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        // get signed in user
        const uid = user.uid;
        console.log(user);
        return uid;
        }
        else {
            return false;
        }
    })
    
  }

  const signOutUser = async () => {
    await signOut(auth);
  }

  const updateUserProfile = async ({ displayName, photoURL }) => {
    try {
        await updateProfile(auth.currentUser, {
            displayName,
            photoURL,
        });
    } catch (error) {
    }
  }