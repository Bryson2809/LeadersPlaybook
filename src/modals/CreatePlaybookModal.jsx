import React from "react";
import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";

import { auth, db } from "../utils/firebase";

import { doc, getDoc, addDoc, collection, setDoc } from "firebase/firestore";

// Take in necessary info to create a playbook
const CreatePlaybookModal = (props) => {
    const [area, setArea] = useState("General");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    const [username, setUsername] = useState("");
    const [playbookName, setPlaybookName] = useState("");

    const onSubmit = async () => {
        const currentUser = auth.currentUser.displayName;

        try {
            //Add new playbook document to firestore
            const colRef = collection(db, "playbooks");
            await addDoc(colRef, {
                playbookName: playbookName,
                area: area,
                endDate: endDate,
                createdOn: currentDate,
                createdBy: currentUser,
                problemDescription: null,
                counterMeasuresBox: null,
                currentStateBox: null,
                implementationPlanBox: null,
                targetImprovementBox: null,
                verifyBox: null,
                rootCauseAnalysisBox: null,
                updateStandardWorkBox: null,
            });

        } catch(error) {
            console.log(error);
        }
        props.onClose();
    }
    

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Create Playbook</h4>
                </div>
                <div className="modal-body">
                    <form>
                        <div>
                            <label htmlFor="playbook name">
                                Playbook Name{' '}
                            </label>
                            <input
                                type="playbook name"
                                label="Playbook Name"
                                value={playbookName}
                                onChange={(e) => setPlaybookName(e.target.value)}
                                required
                                placeholder="Playbook Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="store area">
                                Store Area{' '}
                            </label>
                            <input
                                type="store area"
                                label="Store Area"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                required
                                placeholder="Store Area"
                            />
                        </div>
                    </form>

                    <div className="datePicker">
                        <p>End Date{' '}</p>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={props.onClose}>Cancel</button>
                    <button className="button" onClick={onSubmit}>Create Playbook</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePlaybookModal;