import React from "react";
import { useState, useEffect } from "react";

const PlaybookInfoHeader = () => {
    const [author, setAuthor] = useState("John Doe");
    const [goal, setGoal] = useState(Date);

    return (
        <div>
            <h3>Author: {author}</h3><h3>Created On: </h3><h3>Completion Goal: {goal}</h3>
        </div>
    );
}

export default PlaybookInfoHeader;