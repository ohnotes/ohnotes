import { Container } from './styles';
import Close from '../../assets/close.svg';

export default props => {
    return (
        <Container>
            <section>
                <img src={ Close } width="24" onClick={ () => props.modal(false) } />
                <h1>Changelog</h1>
                <table>
                    <th>
                        <td>First commit is on fire :), contact me if you want to report a problem, my email: 'z3ox1s@protonmail.com'</td>
                    </th>
                </table>
            </section>
        </Container>
    );
}
