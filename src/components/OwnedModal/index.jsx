import { Container } from './styles';
import Close from '../../assets/close.svg';

export default props => (
    <Container data-aos="fade-in">
        <section>
            <img src={ Close } width="24" onClick={ () => props.open(false) } />
            <h1>Owned</h1>
            <h2>Total: { props.owned.length }</h2>
            <table>
                <th>
                    { props.owned.length != 0 &&
                        props.owned.map(i => (
                            <a href={ `${ window.location.href }notes/${ i }` }><td>{ i }</td></a>
                        ))
                    }
                </th>
            </table>
        </section>
    </Container>
);
