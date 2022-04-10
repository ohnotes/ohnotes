import { useState } from 'react';
import { Container } from './styles';
import { ToastContainer } from 'react-toastify';
import { success } from '../../utils/notify';
import { get } from 'axios';
import SettingsModal from '../SettingsModal';
import ArrowLeft from '../../assets/arrowleft.svg';
import ArrowRight from '../../assets/arrowright.svg';
import Home from '../../assets/home.svg';
import Setting from '../../assets/settings.svg';
import Share from '../../assets/share.svg';
import Source from '../../assets/source.svg';

export default () => {
    const [ settingsModalOpen, setSettingsModalOpen ] = useState(false);
    const id = window.location.pathname.split("/")[2];
    const pass = window.location.search.split("=")[1];

    const handleShare = () => {
        navigator.permissions.query({ name: "clipboard-write" }).then(r => {
            if (r.state == "granted" || r.state == "prompt") {
                get(`http://localhost:3001/note/${ id }?pass=${ pass }`, {
                    headers: {
                        Authorization: `Bearer ${ localStorage.getItem("token") }`
                    }
                })
                    .then(r =>
                        navigator.clipboard.writeText(`${ window.location.href }${ r.data.password !== undefined ? '?pass=' + r.data.password : "" }`));
            }
        });

        return success("Link copied to clipboard.");
    }

    return (
        <>
            <ToastContainer />
            { settingsModalOpen && <SettingsModal open={ setSettingsModalOpen } id={ id } /> }
            <Container
                onMouseOver={ () => document.querySelector("#arrow").src = ArrowRight }
                onMouseLeave={ () => document.querySelector("#arrow").src = ArrowLeft }
            >
                <section>
                    <ul>
                        <li><img src={ ArrowLeft } width="22" id="arrow" /></li>
                        <li><a href="/"><img src={ Home } width="22" /></a></li>
                        <li><img src={ Setting } width="22" onClick={ () => setSettingsModalOpen(!settingsModalOpen) }/></li>
                        <li><img src={ Share } width="22" id="cu" onClick={ () => handleShare() }/></li>
                        <li><a href="https://github.com/ohnotes" target="_blank"><img src={ Source } width="22" /></a></li>
                    </ul>
                </section>
            </Container>
        </>
    );
}
