import { useState } from 'react';
import { Container, Hamburguer, Menu } from './styles';
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
import HamburguerIcon from '../../assets/hamburguer.svg';
import Close from '../../assets/close.svg';

export default props => {
    const [ settingsModalOpen, setSettingsModalOpen ] = useState(false);
    const [ menuOpen, setMenuOpen ] = useState(false);
    const id = window.location.pathname.split("/")[2];
    const pass = window.location.search.split("=")[1];

    const handleShare = () => {
        navigator.permissions.query({ name: "clipboard-write" }).then(r => {
            if (r.state == "granted" || r.state == "prompt") {
                get(`/note/${ id }?pass=${ pass }`)
                    .then(r =>
                        navigator.clipboard.writeText(
                            `${ window.location.href }${ r.data.password !== "" ? '?pass=' + r.data.password : "" }`
                        ));
            }
        });

        setMenuOpen(false);
        return success("Link copied to clipboard.");
    }

    const handleSettingsModal = () => {
        setMenuOpen(false);
        setSettingsModalOpen(true);
    }

    if (props.standard) {
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
                            <li><img src={ Setting } width="22" onClick={ () => setSettingsModalOpen(true) }/></li>
                            <li><img src={ Share } width="22" onClick={ () => handleShare() }/></li>
                            <li><a href="https://github.com/ohnotes" target="_blank"><img src={ Source } width="22" /></a></li>
                        </ul>
                    </section>
                </Container>
            </>
        );    
    
    } else {
        return (
            <>
                <ToastContainer />
                { settingsModalOpen && <SettingsModal open={ setSettingsModalOpen } id={ id } /> }
                { menuOpen &&
                    <Menu>
                        <section>
                            <img src={ Close } width="36" onClick={ () => setMenuOpen(false) } />
                            <nav>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li onClick={ () => handleSettingsModal() }>Settings</li>
                                    <li onClick={ () => handleShare() }>Share</li>
                                    <li><a href="https://github.com/ohnotes" target="_blank">Source</a></li>
                                </ul>
                            </nav>
                        </section>
                    </Menu>
                }
                <Hamburguer>
                    <img
                        src={ HamburguerIcon }
                        title="Menu"
                        width="36"
                        style={ menuOpen ? {'opacity': '0' } : null }
                        onClick={ () => setMenuOpen(true) }
                    />
                </Hamburguer>
            </>
        );

    }
}
