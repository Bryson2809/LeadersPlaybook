import React from "react";

import cow from "../images/cow.jpg";
//import { useState, useEffect } from "react";

const HomePage = () => {
    return (
        <div>
            Home Page
            <div className="coverPhoto">
                <img src={cow} alt="cow in front of CFA Hillcrest" />
            </div>
        </div>
    );
}

export default HomePage;