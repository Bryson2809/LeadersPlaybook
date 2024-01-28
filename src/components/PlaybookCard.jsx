import React from 'react';
import { useState } from "react";

import DatePicker from 'react-datepicker';

import CreatePlaybookModal from "../modals/CreatePlaybookModal";

const PlaybookCard = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showCreatePlaybookModal, setShowCreatePlaybookModal] = useState(false);

    const dialog = document.getElementById("myDialog")

    return (
        // <div>
        //     <div className="datePicker">
        //         <p>Select start date:{' '}</p>
        //         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        //     </div>
        //     <div className="datePicker">
        //         <p>Select end date:{' '}</p>
        //         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        //     </div>
        // </div>

        <div>
            <button onClick={() => setShowCreatePlaybookModal(true)}>Create Playbook</button>
            <CreatePlaybookModal show={showCreatePlaybookModal} onClose={() => setShowCreatePlaybookModal(false)}/>
        </div>
    );
}

export default PlaybookCard;