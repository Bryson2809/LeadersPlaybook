import React from 'react';
import { useState, useEffect } from 'react';

import "../App.css";
import { getValue } from '@testing-library/user-event/dist/utils';

const RACICard = () => {
    const [text, setText] = useState("");

    return (
        <div className="RACIMatrix">
            <table>
                <tr>
                    <th>

                    </th>
                    <th>
                        <input type="text" placeholder="Who?" />
                    </th>
                    <th>
                        <input type="text" placeholder="Who?" />
                    </th>
                    <th>
                        <input type="text" placeholder="Who?" />
                    </th>
                    <th>
                        <input type="text" placeholder="Who?" />
                    </th>
                    <th>
                        <input type="text" placeholder="Who?" />
                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="text" placeholder="Task?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?"/>
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="text" placeholder="Task?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?"/>
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="text" placeholder="Task?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?"/>
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                    <th>
                        <input type="text" placeholder="RACI?" />
                    </th>
                </tr>
                <tr>
                    <th colSpan={6}>
                    RACI: R=Responsible, A=Accountable, C=Consulted, I=Informed
                    </th>
                </tr>
            </table>
        </div>
    );
}

export default RACICard;