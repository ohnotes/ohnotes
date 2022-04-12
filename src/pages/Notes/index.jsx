import { useEffect, useState } from 'react';
import { get, post } from 'axios';
import { Container } from './styles';
import { error } from '../../utils/notify';
import Options from '../../components/Options';
import Loading from '../../assets/loading.gif';

export default () => {
    const [ loaded, setLoaded ] = useState(false);
    const [ isOwner, setIsOwner ] = useState(false);
    const [ standard, setStandard ] = useState(false);
    const [ typed, setTyped ] = useState(false);
    const id = window.location.pathname.split("/")[2];
    const pass = window.location.search.split("=")[1];

    useEffect(() => {
        get(`/note/${ id }?pass=${ pass }`)
            .then(r => {
                const history = localStorage.getItem("history");

                if (history === null) {
                    localStorage.setItem("history", JSON.stringify([id]));

                } else {
                    const valid = JSON.parse(history);
 
                    valid.forEach(i => i === id ? null : localStorage.setItem("recent", JSON.stringify([ ...valid, id ])));

                }
                
                get(`/getNotes`)
                    .then(r => r.data.forEach(i => i.id === id ? setIsOwner(true) : null));

                text.value = r.data.text;
                document.title = r.data.name;
            })
            
            .catch(e => window.location.href = "/404");
        
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

        setLoaded(true);
    }, [window.onload]);

    useEffect(() => {
        const text = document.querySelector("#text");
        let interval;

        if (isOwner) {
            interval = setInterval(() => {
                if (typed) {
                    post(`/update/${ id }`, {
                        id,
                        text: text.value,
                        lastUpdate: new Date().toUTCString()
                    })
                        .catch(() => error("You don't have permission to do that."))

                    setTyped(false);
                }

            }, 1000);

        } else {
            interval = setInterval(() => {
                const text = document.querySelector("#text");

                get(`/note/${ id }?pass=${ pass }`)
                    .then(r => { 
                        text.value = r.data.text;
                        document.title = r.data.name;

                    })

                    .catch(e => String(e).includes("404") ? window.location.href = '/404' : null);

            }, 2000);
        }
        
        return () => clearInterval(interval);
    });

    return (
        <>
            <Options standard={ standard } />
            <Container>
                { !loaded &&
                    <section>
                        <img src={ Loading } width="80" />
                    </section>
                }
                <textarea
                    placeholder={
                        isOwner
                        ? "Now, you can type what you want, have fun! :)"
                        : "You are in read-only, wait to note owner write something."
                    }
                    id="text"
                    spellCheck="false"
                    disabled={ !loaded || !isOwner }
                    onInput={ () => setTyped(true) }
                />
            </Container>
        </>
    );
}
