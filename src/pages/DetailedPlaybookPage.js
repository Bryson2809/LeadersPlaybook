import React from "react";
import { useState, useEffect } from "react";

import { db, auth } from "../utils/firebase";

const DetailedPlaybookPage = () => {
    return (
        <div className="detailedPlaybookPageHeader">
            <h1>Playbook Name: </h1>
            <h3>Area: </h3>
        </div>
    )
}

export default DetailedPlaybookPage