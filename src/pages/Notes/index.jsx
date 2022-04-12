import { useEffect, useState } from 'react';
import { get, post } from 'axios';
import { Container } from './styles';
import Options from '../../components/Options';

export default () => {
    const [ standard, setStandard ] = useState(false);
    const id = window.location.pathname.split("/")[2];
    const pass = window.location.search.split("=")[1];

    useEffect(() => {
        get(`/note/${ id }?pass=${ pass }`)
            .then(() => {
                const history = localStorage.getItem("history");

                if (history === null) {
                    localStorage.setItem("history", JSON.stringify([id]));

                } else {
                    const valid = JSON.parse(history);
 
                    valid.forEach(i => i === id ? null : localStorage.setItem("recent", JSON.stringify([ ...valid, id ])));

                }
            })
            
            .catch(e => String(e).includes("404") ? window.location.href = "/404" : null);
        
        get(`/destructive/${ id }`)
            .catch(() => window.location.href = "/403");
        
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

    useEffect(() => {
        const interval = setInterval(() => {
            get(`/note/${ id }?pass=${ pass }`)
                .then(({ data: r }) => {
                    const text = document.querySelector("#text");

                    document.title = r.name;
                    text.value = r.text;
                })

                .catch(e => String(e).includes("404") ? window.location.href = '/404' : window.location.href = "/403");

        }, 300);

        return () => clearInterval(interval);
    }, []);

    const handleUpdate = () => {
        post(`/update/${ id }`, {
            id,
            text: document.querySelector("#text").value,
            lastUpdate: new Date().toUTCString()
        });
    }

    return (
        <>
            <Options standard={ standard } />
            <Container>
                <textarea
                    placeholder="Now, you can type what you want, have fun! :)"
                    id="text"
                    spellCheck="false"
                    onChange={ () => handleUpdate() }
                />
            </Container>
        </>
    );
}
