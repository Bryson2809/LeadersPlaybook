import React from "react";
import { useState, useEffect } from "react";

import { auth, db } from "../utils/firebase";

import { doc, collection, getDoc, addDoc } from "firebase/firestore";

const TextInputModal = (props) => {
    const [text, setText] = useState(`Enter ${props.boxName.toLowerCase()} here`);

    const fetchData = async () => {
        // todo: fetch data for current open playbook box
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
                    <textarea 
                        name="playbookBoxContent"
                        placeholder={text}
                        rows={10}
                        cols={60}
                    />
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={props.onClose}>Cancel</button>
                </div>

            </div>
        </div>
    );
}

export default TextInputModal;