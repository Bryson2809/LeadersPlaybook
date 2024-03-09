import React, { useEffect } from "react";
import { useState } from "react";

import { db } from "../utils/firebase";
import { getDoc, doc } from "firebase/firestore";

import TextInputModal from "../modals/TextInputModal";

// Component that displays one of 8 A3 problem solving stages
// @dataName: the name of the firestore field corresponding to the box
// @boxName: the name of the A3 stage
// @plabookId: firestore document id of the playook this box belongs to
const PlaybookBox = (props) => {
    const [showTextInputModal, setShowTextInputModal] = useState(false);
    const [text, setText] = useState(props.text);

    //Get the appropriate text to reflect the value of the A3 prblem solving stage
    const getText = async () => {
        const docSnap = await getDoc(doc(db, "playbooks", props.playbookId));
        if (props.dataName === "problemDescriptionBox")
            setText(docSnap.data().problemDescriptionBox);
        else if (props.dataName === "counterMeasuresBox")
            setText(docSnap.data().counterMeasuresBox);
        else if (props.dataName === "currentStateBox")
            setText(docSnap.data().currentStateBox);
        else if (props.dataName === "implementationPlanBox")
            setText(docSnap.data().implementationPlanBox);
        else if (props.dataName === "targetImprovementBox")
            setText(docSnap.data().targetImprovementBox);
        else if (props.dataName === "verifyBox")
            setText(docSnap.data().verifyBox);
        else if (props.dataName === "rootCauseAnalysisBox")
            setText(docSnap.data().rootCauseAnalysisBox);
        else if (props.dataName === "updateStandardWorkBox")
            setText(docSnap.data().updateStandardWorkBox);
        else if (props.dataName === "notes")
            setText(docSnap.data().notes);
        else 
            console.log("Not a valid box");
    }

    useEffect(() => {
        getText();
    }, [showTextInputModal]);

    return (
        <>
            <TextInputModal show={showTextInputModal} onClose={() => setShowTextInputModal(false)} boxName={props.boxName} dataName={props.dataName} playbookId={props.playbookId} text={text} />
            <div className="a3-box" onClick={() => setShowTextInputModal(true)}>
                <div className="a3-box-header">
                    <h3>{props.boxName}</h3>
                </div>
                <p className="a3-box-text">{text}</p>
            </div>
        </>
    );
}

export default PlaybookBox;