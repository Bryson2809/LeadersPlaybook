import React from "react";
//import { useState } from "react";

import Nav from "../components/Nav";

import PlaybookCard from "../components/PlaybookCard";
import "react-datepicker/dist/react-datepicker.module.css"

const PlaybookPage = () => {
    return (
        <div>
            <Nav />
            <PlaybookCard />
            Playbooks Page
        </div>
    );
}

export default PlaybookPage;