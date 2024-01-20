// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import FiveSCard from "./components/FiveSCard.jsx";
import PlaybookHeaderCard from "./components/PlaybookHeaderCard.jsx";
import HeaderCard from "./components/HeaderCard.jsx";
import PlaybookInfoHeader from "./components/PlaybookInfoHeader.jsx";
import PlaybookCard from "./components/PlaybookCard.jsx";

import "./App.css";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA917SHi6_5Kp2fH-IZX5zPkr3TnivT8pE",
  authDomain: "playbook-34373.firebaseapp.com",
  projectId: "playbook-34373",
  storageBucket: "playbook-34373.appspot.com",
  messagingSenderId: "933715816117",
  appId: "1:933715816117:web:466dbc82b9cf8648bdd8fc",
  measurementId: "G-09QCH5RT4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
    return (
       <div className="Container">
        <HeaderCard />
        <PlaybookCard />
       </div>
    );
}

export default App;