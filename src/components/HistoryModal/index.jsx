import { useEffect, useState } from 'react';
import { Container } from './styles';
import Close from '../../assets/close.svg';

export default props => {
    const [ history, setHistory ] = useState([]);

    useEffect(() =>
        setHistory(JSON.parse(localStorage.getItem("history")).reverse())

    , [window.onload]);

    return (
        <Container data-aos="fade-in">
            <section>
                <img src={ Close } width="24" onClick={ () => props.open(false) } />
                <h1>History</h1>
                <h2>Total: { history.length != 0 && history.length }</h2>
                <table>
                    <th>
                        { history.length != 0 &&
                            history.map(i => (
                                <a href={ `${ window.location.href }notes/${ i }` }><td>{ i }</td></a>
                            ))
                        }
                    </th>
                </table>
            </section>
        </Container>
    );
}
