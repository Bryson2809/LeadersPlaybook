import React from "react";
import { useState, useEffect } from "react";
import $ from "jquery";

import { auth, db } from "../utils/firebase";

import { doc, collection, getDoc, addDoc, updateDoc } from "firebase/firestore";

const TextInputModal = (props) => {
    const [text, setText] = useState(props.problemDescriptionBox === null ? `Enter ${props.boxName.toLowerCase()} here` : props.problemDescriptionBox);
    
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = async () => {
        const playbookBoxRef = doc(db, "playbooks", props.playbookId);
        var temp = $("#input").val();

        if (props.dataName === "problemDescriptionBox")  {
            console.log(text);
            await updateDoc(playbookBoxRef, {
                problemDescriptionBox: text
            });
        }
        else if (props.dataName === "counterMeasuresBox") {
            await updateDoc(playbookBoxRef, {
                counterMeasuresBox: text,
            })
        }
        else if (props.dataName === "currentStateBox") {
            await updateDoc(playbookBoxRef, {
                currentStateBox: text,
            })
        }
        else if (props.dataName === "implementationPlanBox") {
            await updateDoc(playbookBoxRef, {
                implementationPlanBox: text,
            })
        }
        else if (props.dataName === "targetImprovementBox") {
            await updateDoc(playbookBoxRef, {
                targetImprovementBox: text,
            })
        }
        else if (props.dataName === "verifyBox") {
            await updateDoc(playbookBoxRef, {
                verifyBox: text,
            })
        }
        else if (props.dataName === "rootCauseAnalysisBox") {
            await updateDoc(playbookBoxRef, {
                rootCauseAnalysisBox: text,
            })
        }
        else if (props.dataName === "updateStandardWorkBox") {
            await updateDoc(playbookBoxRef, {
                updateStandardWorkBox: text,
            })
        }
        else if (props.dataName === "notes") {
            await updateDoc(playbookBoxRef, {
                notes: text,
            })
        }
        else {
            console.log("Not a valid box");
        }
        props.onClose();
    }

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div classname="modal-header">
                    <h4 className="modal-title">{props.boxName}</h4>
                </div>
                <div classname="modal-body">
                    <form id="textInputForm">
                        <textarea 
                        id="input"
                        name="playbookBoxContent"
                        rows={10}
                        cols={60}
                        value={text}
                        onChange={handleChange}
                        />
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="submit_button" onClick={onSubmit}>Submit</button>
                    <button className="button" onClick={props.onClose}>Cancel</button>
                </div>

            </div>
        </div>
    );
}

export default TextInputModal;