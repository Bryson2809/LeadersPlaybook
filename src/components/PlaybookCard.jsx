import React from 'react';
import { useState, useRef, useEffect } from "react";

import TextInputModal from '../modals/TextInputModal';

const PlaybookCard = (props) => {

    const [timer, setTimer] = useState("00:00:00:00");
    const [show, setShow] = useState(false);
    const [showTextInputModal, setShowTextInputModalModal] = useState(false);
    const [boxName, setBoxName] = useState("");

    const Ref = useRef(null);

    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        const days = Math.floor(
            (total / 1000 / 60 / 60 / 24)
        );
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    };
 
    const startTimer = (e) => {
        let { total, days, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (days > 9 ? days : "0" + days) +
                ":" +
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };
 
    const clearTimer = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const onBoxClick = (e) => {
        setShowTextInputModalModal(true);
        setBoxName(e);
    }

    useEffect(() => {
        clearTimer(props.endDate);
    });
 
    return (
        <div className="playbookCard">
            <h1>Playbook Name: {props.name}</h1>
            <h3>Area: {props.area}</h3>
            <p>Due By: {props.endDate.toString()}</p>
            <h2>Time Remaining: {timer}</h2>
            {show ? 
                <div>
                    <TextInputModal show={showTextInputModal} onClose={() => setShowTextInputModalModal(false)} boxName={boxName} />
                    <div className="a3-row">
                        <div className="a3-box" onClick={() => onBoxClick("Problem Description")}>
                            <div className="a3-box-header">
                                <h3>Place Holder</h3>
                            </div>
                            <p className="a3-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="a3-box" onClick={() => onBoxClick("Counter Measures")}>
                            <div className="a3-box-header">
                                <h3>Place Holder</h3>
                            </div>
                            <p className="a3-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="a3-row">
                        <div className="a3-box" onClick={() => onBoxClick("Current State")}>
                            <div className="a3-box-header">
                                <h3>Place Holder</h3>
                            </div>
                            <p className="a3-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="a3-box" onClick={() => onBoxClick("Implementation Plan")}>
                            <div className="a3-box-header">
                                <h3>Place Holder</h3>
                            </div>
                            <p className="a3-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="a3-row">
                        <div className="a3-box" onClick={() => onBoxClick("Target Imporvement")}>
                            <div className="a3-box-header">
                                <h3>Place Holder</h3>
                            </div>
                            <p className="a3-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="a3-box" onClick={() => onBoxClick("Check Results / Verify")}>
                            <div className="a3-box-header">
                                <h3>Place Holder</h3>
                            </div>
                            <p className="a3-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="a3-row">
                        <div className="a3-box" onClick={() => onBoxClick("Root Cause Analysis")}>
                            <div className="a3-box-header">
                                <h3>Place Holder</h3>
                            </div>
                            <p className="a3-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="a3-box" onClick={() => onBoxClick("Update Standard Work")}>
                            <div className="a3-box-header">
                                <h3>Place Holder</h3>
                            </div>
                            <p className="a3-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <button onClick={() => setShow(false)}>Close</button>
                </div>
            :
                <div>
                    <button onClick={() => setShow(true)}>Expand Playbook</button>
                </div>
            }
        </div>    
        
    );
}

export default PlaybookCard;