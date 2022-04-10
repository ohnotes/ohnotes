import { Container } from './styles';
import NotFound from '../../assets/notfound.png';

export default () => (
    <Container>
        <img src={ NotFound } width="300" />
        <a href="/"><p>Take me back to home</p></a>
    </Container>
)
