import React from "react";

import HamburgerNavigator from "./HamburgerNavigator";

const Nav = () => {
    return (
        <div className="navigation">
            <ul>
                <li>Home</li>
                <li>Playbooks</li>
                <li>Schedules</li>
            </ul>
            <div>
                <HamburgerNavigator />
            </div>
        </div>
    );
}

export default Nav;