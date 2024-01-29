import { auth, db } from "../utils/firebase";

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    createUserWithEmailAndPassword
  } from "firebase/auth";

  import {
    addDoc,
    collection,
    doc,
    getDoc,
    setDoc
  } from "firebase/firestore";

  const currentUser = auth.currentUser;

  export const getUsername = async () => {
    return currentUser.displayName;
  }

 export const createPlaybook = async ({playbookName, endDate, area}) => {
  const docRef = doc(db, "users", currentUser.displayName);
  const docSnap = await getDoc(docRef);

  try {
    if (docSnap.exists()) {
      const colRef = collection(docRef, "playbooks");
      addDoc(colRef, {
        playbookName: "test",
        area: "test",
        endDate: new Date()
      });
    }
  } catch(error) {
    console.log(error);
  }

  

 }