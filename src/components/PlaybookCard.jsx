import React from 'react';
import { useState, useRef, useEffect } from "react";

import TextInputModal from '../modals/TextInputModal';
import PlaybookBox from './PlaybookBox';

const PlaybookCard = (props) => {

    const [timer, setTimer] = useState("00:00:00:00");
    const [show, setShow] = useState(false);

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

    useEffect(() => {
        clearTimer(props.playbook.data().endDate.toDate());
    });
 
    return (
        <div className="playbookCard">
            <h1>Playbook Name: {props.playbook.data().playbookName}</h1>
            <h3>Area: {props.playbook.data().area}</h3>
            <p>Due By: {props.endDate.toString()}</p>
            <h2>Time Remaining: {timer}</h2>
            {show ? 
                <div>
                    <div className="a3-row">
                        <PlaybookBox boxName="Problem Description" dataName="problemDescriptionBox" playbookId={props.playbook.id} text={props.playbook.data().problemDescriptionBox} playbook={props.playbook} />
                        <PlaybookBox boxName="Counter Measures" dataName="counterMeasuresBox" playbookId={props.playbookId} text={props.playbook.data().counterMeasuresBox}/>
                    </div>
                    <div className="a3-row">
                        <PlaybookBox boxName="Current State" dataName="currentStateBox" playbookId={props.playbookId} text={props.playbook.data().currentStateBox} />
                        <PlaybookBox boxName="Implementation Plan" dataName="implementationPlanBox" playbookId={props.playbookId} text={props.playbook.data().implementationPlanBox} />
                    </div>
                    <div className="a3-row">
                        <PlaybookBox boxName="Target Improvement" dataName="targetImprovementBox" playbookId={props.playbookId} text={props.playbook.data().targetImprovementBox} />
                        <PlaybookBox boxName="Check Results / Verify" dataName="verifyBox" playbookId={props.playbookId} text={props.playbook.data().verifyBox} />
                    </div>
                    <div className="a3-row">
                        <PlaybookBox boxName="Root Cause Analysis" dataName="rootCauseAnalysisBox" playbookId={props.playbookId} text={props.playbook.data().rootCauseAnalysisBox} />
                        <PlaybookBox boxName="Update Standard Work" dataName="updateStandardWorkBox" playbookId={props.playbookId} text={props.playbook.data().updateStandardWorkBox} />
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