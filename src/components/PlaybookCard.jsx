import React from 'react';
import { useState, useEffect } from 'react';
import PlaybookInfoHeader from './PlaybookInfoHeader';
import PlaybookHeaderCard from './PlaybookHeaderCard';

const PlaybookCard = () => {

    return (
        <div>
            <PlaybookHeaderCard />
            <PlaybookInfoHeader />
        </div>
    );
}

export default PlaybookCard;