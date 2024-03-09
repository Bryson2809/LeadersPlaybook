import React, { useEffect } from "react";
import { useState } from "react";

import { db } from "../utils/firebase";

import $, { event } from "jquery";

import { getDoc, updateDoc, doc, collection } from "firebase/firestore";

const RACIProfleCard = (props) => {
    const [name, setName] = useState("");
    const [r, setR] = useState(true);
    const [a, setA] = useState(true);
    const [c, setC] = useState(true);
    const [i, setI] = useState(true);

    useEffect(() => {
        const fetchRoles = async () => {
            const role = await getDoc(doc(db, "playbooks", "Kxla6slB7RIc19lJ4qWI", "RACIProfiles", "EhDdmAgrPsC4PiGwvwVc"));
            console.log(`Initial render ${role.data().R}`);
            if (role.data().R === true) {
                document.getElementById("r").className = "selected";
                setR(true);
            }
            else if (role.data().R === false) {
                document.getElementById("r").className = "";
                setR(false);
            }

            if (role.data().A === true) {
                document.getElementById("a").className = "selected";
                setA(true);
            }
            else if (role.data().A === false) {
                document.getElementById("a").className = "";
                setA(false);
            }

            if (role.data().C === true) {
                document.getElementById("c").className = "selected";
                setC(true);
            }
            else if (role.data().C === false) {
                document.getElementById("c").className = "";
                setC(false);
            }

            if (role.data().I === true) {
                document.getElementById("i").className = "selected";
                setI(true);
            }
            else if (role.data().I === false) {
                document.getElementById("i").className = "";
                setI(false);
            }
            console.log(r);
        }
        fetchRoles();
    });

    const toggleRole = async (event) => {
        var role = event.currentTarget.id;
        const docSnap = await getDoc(doc(db, "playbooks", "Kxla6slB7RIc19lJ4qWI", "RACIProfiles", "EhDdmAgrPsC4PiGwvwVc"));

        const docRef = doc(db, "playbooks", "Kxla6slB7RIc19lJ4qWI", "RACIProfiles", "EhDdmAgrPsC4PiGwvwVc");

        if (role === "r") {
            var newData = !docSnap.data().R;
            await updateDoc(docRef, {
                R: newData,
            });
            console.log("toggled R");
            setR(!r);
            console.log(r);
        }
        else if (role === "a") {
            await updateDoc(docRef, {
                A: !docSnap.data().A,
            });
            console.log("toggled A");
            setA(!a);
        }
        else if (role === "c") {
            await updateDoc(docRef, {
                C: !docSnap.data().C,
            });
            console.log("toggled C");
            setC(!c);
        }
        else if (role === "i") {
            await updateDoc(docRef, {
                I: !docSnap.data().I,
            });
            console.log("toggled I");
            setI(!i);
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