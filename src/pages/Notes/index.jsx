import React, { useEffect } from 'react';
import { get, post } from 'axios';
import { Container } from './styles';
import Options from '../../components/Options';

export default () => {
    const id = window.location.pathname.split("/")[2];
    const pass = window.location.search.split("=")[1];

    useEffect(() => {
        get(`http://localhost:3001/note/${ id }?pass=${ pass }`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem("token") }`
            }
        })
            .then(() => {
                const recent = localStorage.getItem("recent");

                if (recent === null) {
                    localStorage.setItem("recent", JSON.stringify([id]));

                } else {
                    const valid = JSON.parse(recent);
 
                    valid.forEach(i => i === id ? null: localStorage.setItem("recent", JSON.stringify([ ...valid, id ])));

                }
            })
            
            .catch(e => String(e).includes("404") ? window.location.href = "/404" : null);
        
        get(`http://localhost:3001/destructive/${ id }`)
            .catch(() => window.location.href = "/403");
    
    }, [window.onload]);

    useEffect(() => {
        const interval = setInterval(() => {
            get(`http://localhost:3001/note/${ id }?pass=${ pass }`, {
                headers: {
                    Authorization: `Bearer ${ localStorage.getItem("token") }`
                }
            })
                .then(({ data: r }) => {
                    const text = document.querySelector("#text");

                    document.title = r.name;
                    text.value = r.text;
                })

                .catch(e => String(e).includes("404") ? window.location.href = '/404' : window.location.href = "/403");

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleUpdate = () => {
        post(`http://localhost:3001/update/${ id }`, {
            id,
            text: document.querySelector("#text").value,
            lastUpdate: new Date().toUTCString()
        });
    }

    return (
        <>
            <Options />
            <Container>
                <textarea
                    type="text"
                    placeholder="Now, you can type what you want, have fun! :)"
                    id="text"
                    spellCheck="false"
                    onChange={ () => handleUpdate() }
                />
            </Container>
        </>
    );
}
