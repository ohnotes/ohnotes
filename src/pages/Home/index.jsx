import React, { useState, useEffect } from 'react';
import { Container, Create } from './styles';
import { post } from 'axios';
import { ToastContainer } from 'react-toastify';
import { error } from '../../utils/notify';
import HistoryModal from '../../components/HistoryModal';
import OwnedModal from '../../components/OwnedModal';
import HomeSettingsModal from '../../components/HomeSettingsModal';
import HomeOptions from '../../components/HomeOptions';
import 'react-toastify/dist/ReactToastify.css';

export default () => {
    const [ homeSettingsModal, setHomeSettingsModalOpen ] = useState(false);
    const [ historyModal, setHistoryModalOpen ] = useState(false);
    const [ ownedModal, setOwnedModalOpen ] = useState(false);
    const [ isPrivate, setIsPrivate ] = useState(false);
    const [ isDestructive, setIsDestructive ] = useState(false);
    const [ isShared, setIsShared ] = useState(false);
    const [ standard, setStandard ] = useState(true);
    const [ owned, setOwned ] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (user === null || token === null) {
            (async () => {
                await post("/generate")
                    .then(r => {
                        localStorage.setItem("token", r.data.token);
                        localStorage.setItem("user", r.data.id);

                        window.location.reload();
                    });
            })();
        }

    }, [window.onload]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setStandard(false);
        
            } else {
                setStandard(true);

            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

    }, [window.onload]);

    const handlePrivate = () => setIsPrivate(document.querySelector("#private").checked);
    const handleDestructive = () => setIsDestructive(document.querySelector("#destructive").checked);
    const handleShared = () => setIsShared(document.querySelector("#shared").checked);
    
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
            turns: parseInt(turns.value),
            shared: isShared
        })
            .then(r => window.location = `/notes/${ r.data.id }`)
    }

    return (
        <>
            <ToastContainer />
            { homeSettingsModal && <HomeSettingsModal open={ setHomeSettingsModalOpen } /> }
            { historyModal && <HistoryModal open={ setHistoryModalOpen } error={ error } /> }
            { ownedModal && <OwnedModal open={ setOwnedModalOpen } error={ error } owned={ owned } /> }
            <Container>
                <HomeOptions
                    standard={ standard }
                    ownedopen={ setOwnedModalOpen }
                    owned={ setOwned }
                    historyopen={ setHistoryModalOpen }
                    settingsopen={ setHomeSettingsModalOpen }
                />
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
                    <input type="checkbox" id="private" onChange={ () => handlePrivate() } />
                    <label for="private">Private</label>
                    <input type="checkbox" id="destructive" onChange={ () => handleDestructive() } />
                    <label for="destructive">Destructive</label>
                    <input type="checkbox" id="shared" onChange={ () => handleShared() } />
                    <label for="shared">Shared</label><br />
                    <input type="button" id="submit" value="Create" onClick={ () => handleSubmit() } />
                </Create>
            </Container>
        </>
    );
}
