import React from "react";
import { useState } from "react";

import { db } from "../utils/firebase";

import $, { event } from "jquery";

import { getDoc, updateDoc, doc, collection } from "firebase/firestore";

const RACIProfleCard = (props) => {
    const [name, setName] = useState("");

    // const toggleRole = async () => {
    //     var currClass = $(this).hasClass("test");
    //     console.log(currClass);
    // }

    const toggleRole = async (event) => {
        var currClass = event.currentTarget.className;

        if (currClass === "selected") {
            event.currentTarget.className = "";
        }
        else {
            event.currentTarget.className = "selected";
        }

        var role = event.currentTarget.id;
        const docRef = doc(db, "playbooks", "Kxla6slB7RIc19lJ4qWI", "RACIProfiles", "EhDdmAgrPsC4PiGwvwVc");
        console.log(docRef.R);

        if (role === "r") {
            await updateDoc(docRef, {
                R: !docRef.R,
            });
        }
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <div className="roles">
                <button id="r" onClick={toggleRole}>R</button>
                <button id="a" onClick={toggleRole}>A</button>
                <button id="c" onClick={toggleRole}>C</button>
                <button id="i" onClick={toggleRole}>I</button>
            </div>
        </div>
    );
}

export default RACIProfleCard;