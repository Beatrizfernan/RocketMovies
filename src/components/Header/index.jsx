import { Container, Profile } from './styles'
import { Link } from 'react-router-dom'
import { Input } from '../Input'
export function Header() {
    return (
        <Container>
            <h1>Rocketmovies</h1>
            <Input placeholder="Pesquisar por título" />
            <Profile to="/profile">
                <div>
                    <strong>Beatriz Fernandes </strong>
                    <a href="#">sair</a>
                </div>
                <img src="https://github.com/Beatrizfernan.png" alt="foto do perfil" />
            </Profile>
        </Container>
    )
}