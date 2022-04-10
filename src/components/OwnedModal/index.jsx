import { useEffect, useState } from 'react';
import { get } from 'axios';
import { Container } from './styles';
import Close from '../../assets/close.svg';

export default props => {
    const [ owned, setOwned ] = useState([]);

    useEffect(() => {
        get(`/getNotes`)
            .then(r => {
                if (r.data !== null) {
                    const list = [];
                    r.data.forEach(i => list.push(i.id));

                    setOwned(list);
                
                } else {
                    props.open(false);
                    props.error("You don't have any note, try to create a new.");

                    return
                }
            });
    });

    return (
        <Container>
            <section>
                <img src={ Close } width="24" onClick={ () => props.open(false) } />
                <h1>Owned</h1>
                <h2>Total: { owned.length }</h2>
                <table>
                    <th>
                        { owned.length != 0 &&
                            owned.map(i => (
                                <a href={ `${ window.location.href }notes/${ i }` }><td>{ i }</td></a>
                            ))
                        }
                    </th>
                </table>
            </section>
        </Container>
    );
}
