import React from "react";
import { useState } from "react";

import { auth, db } from "../utils/firebase";

import TextInputModal from "../modals/TextInputModal";

const PlaybookBox = (props) => {
    const [showTextInputModal, setShowTextInputModal] = useState(false);

    return (
        <>
            <TextInputModal show={showTextInputModal} onClose={() => setShowTextInputModal(false)} boxName={props.boxName} dataName={props.dataName} playbookId={props.playbookId} text={props.text} />
            <div className="a3-box" onClick={() => setShowTextInputModal(true)}>
                <div className="a3-box-header">
                    <h3>{props.boxName}</h3>
                </div>
                <p className="a3-box-text">{props.text}</p>
            </div>
        </>
    );
}

export default PlaybookBox;