import React from 'react';
import { useState, useEffect } from 'react';

const PlaybooHeaderCard = () => {
    const [area, setArea] = useState("General");

    return (
        <div className="PlaybookHeader">
            <h1 onClick={(() => setArea(prompt("What area is this playlist for?")))}>{area} Playbook</h1>
        </div>
    );
}

export default PlaybooHeaderCard;