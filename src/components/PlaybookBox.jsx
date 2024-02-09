import React from "react";
import { useState } from "react";

import { auth, db } from "../utils/firebase";

import TextInputModal from "../modals/TextInputModal";

const PlaybookBox = (props) => {
    const [showTextInputModal, setShowTextInputModal] = useState(false);

    return (
        <>
            <TextInputModal show={showTextInputModal} onClose={() => setShowTextInputModal(false)} boxName={props.boxName} />
            <div className="a3-box" onClick={() => setShowTextInputModal(true)}>
                <div className="a3-box-header">
                    <h3>{props.boxName}</h3>
                </div>
                <p className="a3-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </>
    );
}

export default PlaybookBox;