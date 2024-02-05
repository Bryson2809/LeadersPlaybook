import React, { useEffect } from "react";
import { useState } from "react";

import Nav from "../components/Nav";

import PlaybookCard from "../components/PlaybookCard";
import CreatePlaybookModal from "../modals/CreatePlaybookModal";

import { db, auth } from "../utils/firebase";

import { doc, getDoc, collection, query, getDocs } from "firebase/firestore";

const PlaybookPage = () => {
    const [showCreatePlaybookModal, setShowCreatePlaybookModal] = useState(false);
    const [playbooks, setPlaybooks] = useState([]);

    const mapPlaybooks = async () => {
        const currentUser = auth.currentUser;
        const docRef = doc(db, "users", currentUser.displayName);
        const docSnap = await getDoc(docRef);
        const playbookRef = collection(docRef, "playbooks");
        const q = query(playbookRef);
        const querySnapshot = await getDocs(q);
        const temp = [];
        querySnapshot.forEach((doc) => {
            temp.push(doc.data());
        });
        setPlaybooks(temp);
    }

    useEffect(() => {
        mapPlaybooks();
        console.log(playbooks);
    });

    const listPlabooks = playbooks.map((playbook) => 
        <PlaybookCard name={playbook.playbookName} area={playbook.area} endDate={playbook.endDate.toDate()} />
    );

    return (
        <div>
            <Nav />
            {listPlabooks}
            <div>
                <button onClick={() => setShowCreatePlaybookModal(true)}>Create Playbook</button>
                <CreatePlaybookModal show={showCreatePlaybookModal} onClose={() => setShowCreatePlaybookModal(false)}/>
            </div>
            Playbooks Page
        </div>
    );
}

export default PlaybookPage;