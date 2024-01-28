import React from "react";
import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";

const CreatePlaybookModal = (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
                    This is the modal content
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePlaybookModal;