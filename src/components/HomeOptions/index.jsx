import { get } from 'axios';
import { useState } from 'react';
import { error } from '../../utils/notify';
import { Standard, Hamburguer, Menu } from './styles';
import History from '../../assets/history.svg';
import List from '../../assets/list.svg';
import Settings from '../../assets/settings.svg';
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

    const handleSettingsBurger = () => {
        setMenuOpen(false);

        props.settingsopen(true);
    }

    if (props.standard) {
        return (
            <Standard>
                <img src={ Settings } title="Settings" width="24" onClick={ () => props.settingsopen(true) } />
                <img src={ History } title="History" width="24" onClick={ () => handleOpenHistory() } />
                <img src={ List } title="Owned" width="24" onClick={ () => handleOpenOwned() } />
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
