import { useState, useEffect } from 'react';
import { Container } from './styles';
import { get, post } from 'axios';
import { success, error } from '../../utils/notify';
import Close from '../../assets/close.svg';

export default props => {
    const [ isOwner, setIsOwner ] = useState(false);
    const [ isPrivate, setIsPrivate ] = useState(false);
    const pass = window.location.search.split("=")[1];

    useEffect(() => {
        get(`/note/${ props.id }?pass=${ pass }`)
            .then(r => {
                document.querySelector("#name").value = r.data.name;
                document.querySelector("#observation").value = r.data.observation;

                setIsPrivate(r.data.private);
            });

        get(`/getNotes`)
            .then(r => r.data.forEach(i => i.id === props.id ? setIsOwner(true) : setIsOwner(false) ));

    }, [window.onload])
    
    const handlePrivate = () => setIsPrivate(document.querySelector("#private").checked);
    
    const handleSaveSettings = () => {
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
        
        props.open(false);
    }

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete the note?")) {
            post(`/delete/${ props.id }`, {})
                .then(() => window.location.href = '/')
                .catch(() => error("You don't have permission to do that."));
        
            props.open(false);
        }
    }

    return (
        <Container data-aos="fade-in">
            <section>
                <img src={ Close } width="24" onClick={ () => props.open(false) } />
                { isOwner &&
                    <div id="owner">
                        <input
                            type="button"
                            id="save"
                            value="Save"
                            onClick={ handleSaveSettings }
                        />
                        <input
                            type="button"
                            id="delete"
                            value="Delete"
                            onClick={ handleDelete }
                        />
                    </div>
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
