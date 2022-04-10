import { Container } from './styles';
import Forbidden from '../../assets/forbidden.png';

export default () => (
    <Container>
        <img src={ Forbidden } width="300" />
        <a href="/"><p>Take me back to home</p></a>
    </Container>
)
