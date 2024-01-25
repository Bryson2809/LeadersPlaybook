import React from 'react';
import { useState } from "react";

import DatePicker from 'react-datepicker';


const PlaybookCard = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div>
            <div className="datePicker">
                <p>Select start date:{' '}</p>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="datePicker">
                <p>Select end date:{' '}</p>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </div>
    );
}

export default PlaybookCard;