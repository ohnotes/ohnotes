import { useEffect, useState } from 'react';
import { get, post } from 'axios';
import { Container } from './styles';
import { error } from '../../utils/notify';
import Options from '../../components/Options';
import Loading from '../../assets/loading.gif';

export default () => {
    const [ loaded, setLoaded ] = useState(false);
    const [ isShared, setIsShared ] = useState(true);
    const [ isOwner, setIsOwner ] = useState(false);
    const [ standard, setStandard ] = useState(false);
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
                
                if (!r.shared) {
                    setIsShared(false);

                }

                get(`/getNotes`)
                    .then(r => r.data.forEach(i => i.id === id ? setIsOwner(true) : null));

                text.value = r.data.text;
                document.title = r.data.name;
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

        setLoaded(true);
    }, [window.onload]);

    useEffect(() => {
        const text = document.querySelector("#text");
        let typed = false;

        text.addEventListener("input", () => typed = true);

        const interval = setInterval(() => {
            if (typed) {
                post(`/update/${ id }`, {
                    id,
                    text: text.value,
                    lastUpdate: new Date().toUTCString()
                })
                    .catch(() => error("You don't have permission to do that."))

                typed = false;
            }
            
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const text = document.querySelector("#text");

            get(`/note/${ id }?pass=${ pass }`)
                .then(r => {        
                    text.value = r.data.text;
                    document.title = r.data.name;

                })

                .catch(e => String(e).includes("404") ? window.location.href = '/404' : null);

        }, 3000);

        return () => clearInterval(interval);
    }, []);

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
                    placeholder="Now, you can type what you want, have fun! :)"
                    id="text"
                    spellCheck="false"
                    disabled={ !loaded || !isShared && !isOwner }
                />
            </Container>
        </>
    );
}
