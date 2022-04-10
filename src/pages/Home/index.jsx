import React, { useState, useEffect } from 'react';
import { Container, Options, Create } from './styles';
import { get, post } from 'axios';
import { ToastContainer } from 'react-toastify';
import { success, error } from '../../utils/notify';
import ChangelogModal from '../../components/ChangelogModal';
import HistoryModal from '../../components/HistoryModal';
import OwnedModal from '../../components/OwnedModal';
import User from '../../assets/user.svg';
import Changelog from '../../assets/changelog.svg';
import History from '../../assets/history.svg';
import List from '../../assets/list.svg';
import Wipe from '../../assets/wipe.svg';
import 'react-toastify/dist/ReactToastify.css';

export default () => {
    const [ historyModal, setHistoryModalOpen ] = useState(false);
    const [ ownedModal, setOwnedModalOpen ] = useState(false);
    const [ changelogModal, setChangelogModalOpen ] = useState(false);
    const [ isPrivate, setIsPrivate ] = useState(false);
    const [ isDestructive, setIsDestructive ] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (user === null || token === null) {
            (async () => {
                await post("/generate")
                    .then(r => {
                        localStorage.setItem("token", r.data.token);
                        localStorage.setItem("user", r.data.id);
                    });
            })();
        }

    }, [window.onload]);

    const handlePrivate = () => setIsPrivate(document.querySelector("#private").checked);
    const handleDestructive = () => setIsDestructive(document.querySelector("#destructive").checked);
    
    const handleSubmit = () => {
        const name = document.querySelector("#name");
        const observation = document.querySelector("#observation");
        const password = document.querySelector("#password");
        const turns = document.querySelector("#turns");

        if (name.value === "") {
            name.focus();

            return error("Name field is required.");
        }

        if (isPrivate && password.value == "") {
            password.focus();

            return error("Password field is required.");
        }
        
        if (isDestructive && turns.value == "") {
            turns.focus();

            return error("Times field is required.");
        }

        post("/new", {
            name: name.value,
            observation: observation.value,
            private: isPrivate,
            password: password.value,
            text: "",
            createdAt: new Date().toUTCString(),
            destructive: isDestructive,
            turns: parseInt(turns.value)
        })
            .then(r => window.location = `/notes/${ r.data.id }`)
    }

    const handleCopyUser = () => {
        navigator.permissions.query({ name: "clipboard-write" }).then(r => {
            if (r.state == "granted" || r.state == "prompt") {
                navigator.clipboard.writeText(localStorage.getItem("user"));
            
            }

            return success("User ID copied to clipboard.");
        });
    }

    const handleWipe = () => {
        if (confirm("Are you sure you want WIPE ALL DATA? Includes user and notes data.")) {
            get(`/wipe`)
                .then(() => {
                    localStorage.clear();
                    window.location.reload();

                })

                .catch(() => error("Failed to wipe data."));
        }
    }

    return (
        <>
            <ToastContainer />
            { changelogModal && <ChangelogModal open={ setChangelogModalOpen } /> }
            { historyModal && <HistoryModal open={ setHistoryModalOpen } error={ error } /> }
            { ownedModal && <OwnedModal open={ setOwnedModalOpen } error={ error } /> }
            <Container>
                <Options>
                    <img src={ User } title="Copy user ID" width="24" onClick={ () => handleCopyUser() } />
                    <img src={ Changelog } title="Changelog" width="24" onClick={ () => setChangelogModalOpen(true) } />
                    <img src={ History } title="History" width="24" onClick={ () => setHistoryModalOpen(true) } />
                    <img src={ List } title="Owned" width="24" onClick={ () => setOwnedModalOpen(true) } />
                    <img src={ Wipe } title="Wipe data" width="24" onClick={ () => handleWipe() } />
                </Options>
                <Create id="create">
                    <h1>Create</h1>
                    <input type="text" id="name" placeholder="Name" autoComplete="off" required /><br />
                    <input type="text" id="observation" placeholder="Observation" autoComplete="off" /><br />
                    <input type="password" id="password" placeholder="Password" disabled={ !isPrivate } /><br />
                    <input
                        type="number"
                        id="turns"
                        min="0"
                        placeholder="Turns"
                        disabled={ !isDestructive }
                    /><br />
                    <input type="checkbox" id="private" name="private" onChange={ () => handlePrivate() } />
                    <label for="private">Private</label>
                    <input type="checkbox" id="destructive" name="destructive" value="cu" onChange={ () => handleDestructive() } />
                    <label for="destructive">Destructive</label><br />
                    <input type="button" id="submit" value="Create" onClick={ () => handleSubmit() } />
                </Create>
            </Container>
        </>
    );
}
