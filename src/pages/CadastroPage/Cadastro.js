import { Link } from "react-router-dom"
import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { StyledImage, StyledInputs, Wrapper, StyledButton } from "../LoginPage/LoginStyle"
import ThreeDotsLoader from "../../components/Loaders/ThreeDotsLoader"
import { Animated } from "react-animated-css"
import TransparentBackground from "../../components/Backgrounds/TransparentBackground"

export default function Cadastro(props) {

    const navigate = useNavigate();
    const [usuario, setUsuario] = React.useState({ email: '', name: '', password: '', confirmPassword: '' })
    const [entrar, setEntrar] = React.useState('Register')

    async function handleButton() { // Trocar pra await try/catch depois se possivel
        setEntrar('')
        props.setHabilitado(true)

        axios.post(`${process.env.REACT_APP_API_URL}/users`, usuario)
            .then(() => {
                props.setHabilitado(false);
                navigate('/')
            }).catch(() => {
                alert('Não foi possível cadastrar o usuário.')
                props.setHabilitado(false)
                setEntrar('Register')
            })
    }

    return (
        <Wrapper>
            <TransparentBackground />

            <Animated
                animationIn="fadeInDown"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={true}
            >
                <StyledImage>
                    <img src="./assets/img/papaleguas.gif" alt=""></img>
                    <h1>Ligeirinho</h1>
                    <p>Seu pedido em até 30 minutos</p>
                </StyledImage>
            </Animated>
            <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={true}
            >
                <StyledInputs>
                    <input
                        type='text'
                        placeholder="name"
                        value={usuario.name}
                        onChange={e => setUsuario({ ...usuario, name: e.target.value })}
                        disabled={props.habilitado}
                    />
                    <input
                        type='email'
                        placeholder="e-mail"
                        value={usuario.email}
                        onChange={e => setUsuario({ ...usuario, email: e.target.value })}
                        disabled={props.habilitado}
                    />
                    <input
                        type='password'
                        placeholder="password"
                        onChange={e => setUsuario({ ...usuario, password: e.target.value })}
                        disabled={props.habilitado}
                    />
                    <input
                        type='password'
                        placeholder="confirm password"
                        onChange={e => setUsuario({ ...usuario, confirmPassword: e.target.value })}
                        disabled={props.habilitado}
                    />
                    <StyledButton onClick={() => handleButton()}>
                        {entrar === 'Register' ? entrar : <ThreeDotsLoader />}
                    </StyledButton>
                </StyledInputs>
                <Link to='/'><p className="cadastro"> Already have an account? Log in!</p></Link>
            </Animated>
        </Wrapper>
    )
}