import React from "react";
import { Link } from "react-router-dom";

import HamburgerNavigator from "./HamburgerNavigator";

const Nav = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <Link className ="link" to="/home">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/playbook">Playbooks</Link>
                </li>
                <li>
                    <Link className="link" to="/schedule">Schedules</Link>
                </li>
            </ul>
            <div>
                <HamburgerNavigator />
            </div>
        </div>
    );
}

export default Nav;