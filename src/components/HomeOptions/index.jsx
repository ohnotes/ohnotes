import { get } from 'axios';
import { useState } from 'react';
import { error } from '../../utils/notify';
import { Standard, Hamburguer, Menu } from './styles';
import Close from '../../assets/close.svg';
import HamburguerIcon from '../../assets/hamburguer.svg';

export default props => {
    const [ menuOpen, setMenuOpen ] = useState(false);

    const handleOpenHistory = () => {
        const history = localStorage.getItem("history");

        try {
            JSON.parse(history);

        } catch (e) {
            return error("Invalid history format.");

        }

        if (history === null || JSON.parse(history).length === 0) {
            return error("You don't have a history.");

        }
 
        if (menuOpen) {
            setMenuOpen(false);

        }

        props.historyopen(true);
    }

    const handleOpenOwned = () => {
        get(`/getNotes`)
            .then(r => {
                if (r.data !== null) {
                    if (menuOpen) {
                        setMenuOpen(false);

                    }

                    props.owned(r.data.map(i => i.id));
                    props.ownedopen(true);
                
                } else {
                    error("You don't have any note, try to create a new.");

                }
            });
    }

    const handleOpenSettings = () => props.settingsopen(true);

    const handleSettingsBurger = () => {
        setMenuOpen(false);

        props.settingsopen(true);
    }

    const handleSource = () => window.location.href = 'https://github.com/ohnotes';

    if (props.standard) {
        return (
            <Standard>
                <nav>
                    <h1>Ohnotes</h1>
                    <ul>
                        <li onClick={ handleOpenOwned }>Owned</li>
                        <li onClick={ handleOpenHistory }>History</li>
                        <li onClick={ handleOpenSettings }>Settings</li>
                        <li onClick={ handleSource }>Source</li>
                    </ul>
                </nav>
            </Standard>
        );

    } else {
        return (
            <>
                { menuOpen &&
                    <Menu>
                        <section>
                            <img src={ Close } width="36" onClick={ () => setMenuOpen(false) } />
                            <nav>
                                <ul>
                                    <li onClick={ () => handleSettingsBurger() }>Settings</li>
                                    <li onClick={ () => handleOpenHistory() }>History</li>
                                    <li onClick={ () => handleOpenOwned() }>Owned</li>
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
                        style={ menuOpen ? { 'opacity': '0' } : null }
                        onClick={ () => setMenuOpen(true) }
                    />
                </Hamburguer>
            </>
        );

    }
}
