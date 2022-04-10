import { useState, useEffect } from 'react';
import { Container } from './styles';
import { get, post } from 'axios';
import { success, error } from '../../utils/notify';
import Close from '../../assets/close.svg';
import Save from '../../assets/save.svg';
import Delete from '../../assets/delete.svg';

export default props => {
    const [ isOwner, setIsOwner ] = useState(false);
    const [ isPrivate, setIsPrivate ] = useState(false);
    const pass = window.location.search.split("=")[1];

    useEffect(() => {
        (async () => {
            get(`/note/${ props.id }?pass=${ pass }`)
                .then(({ data: r }) => {
                    document.querySelector("#name").value = r.name;
                    document.querySelector("#observation").value = r.observation;

                    setIsPrivate(r.private);
                    setIsOwner(r.isOwner);
                });
        })();

    }, [window.onload])
    
    const handlePrivate = () => setIsPrivate(document.querySelector("#private").checked);
    
    const handleSaveSettings = () => {
        props.open(false);

        const name = document.querySelector("#name").value;
        const observation = document.querySelector("#observation").value;
        const password = document.querySelector("#password");

        if (isPrivate && password.value === "") {
            return error("Password field is required.");

        }

        post(`/update/${ props.id }/settings`, {
            name,
            observation,
            private: isPrivate,
            password: password.value
        })
            .then(() => success("Saved succesfully."))
            .catch(() => error("You don't have permission to do that."));
    }

    const handleDelete = () => {
        props.open(false);

        if (confirm("Are you sure you want to delete the note?")) {
            post(`/delete/${ props.id }`, {})
                .catch(() => error("You don't have permission to do that."));    
        }
    }

    return (
        <Container>
            <section>
                <img src={ Close } width="24" onClick={ () => props.open(false) } />
                { isOwner &&
                    <>
                        <img src={ Delete } width="24" onClick={ () => handleDelete() }/>
                        <img src={ Save } width="24" onClick={ () => handleSaveSettings() } />
                    </>
                }
                <h1>Settings</h1>
                <input type="text" id="name" placeholder="Name" disabled={ !isOwner } /><br />
                <input type="text" id="observation" placeholder="Observation" disabled={ !isOwner } /><br />
                <input
                    type="password"
                    id="password"
                    placeholder={ isPrivate ? "New password" : "Password" }
                    disabled={ !isPrivate }
                    hidden={ !isOwner }
                /><br />
                <input
                    type="checkbox"
                    id="private"
                    name="private"
                    placeholder="Private"
                    checked={ isPrivate }
                    disabled={ !isOwner }
                    onChange={ () => handlePrivate() }
                />
                <label for="private">Private</label><br />
            </section>
        </Container>
    );
}
