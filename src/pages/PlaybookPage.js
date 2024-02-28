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
        const playbookRef = collection(db, "playbooks");
        const q = query(playbookRef);
        const querySnapshot = await getDocs(q);
        const temp = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.id);
            temp.push(doc);
        });
        setPlaybooks(temp);
    }

    useEffect(() => {
        mapPlaybooks();
        //console.log(playbooks);
    }, [showCreatePlaybookModal]);

    const listPlaybooks = playbooks.map((playbook) => 
        <PlaybookCard name={playbook.data().playbookName} area={playbook.data().area} endDate={playbook.data().endDate.toDate()} currentPlaybook={playbook.id} playbookId={playbook.id} playbook={playbook} />
    );

    return (
        <div>
            <Nav />
            {listPlaybooks}
            <div className="playbookPageFooter">
                <button onClick={() => setShowCreatePlaybookModal(true)}>Create Playbook</button>
                <CreatePlaybookModal show={showCreatePlaybookModal} onClose={() => setShowCreatePlaybookModal(false)}/>
            </div>
        </div>
    );
}

export default PlaybookPage;