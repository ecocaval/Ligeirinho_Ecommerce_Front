import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import axios from "axios";

import ThreeDotsLoader from "../../components/Loaders/ThreeDotsLoader";
import { StyledButton, StyledImage, StyledInputs, Wrapper } from "./LoginStyle";
import TransparentBackground from "../../components/Backgrounds/TransparentBackground";

export default function Login(props) {

    useEffect(() => {
        const audio = new Audio('./assets/audios/papaleguas.mp3')
        audio.play();
    }, [])

    const navigate = useNavigate();

    const [entrar, setEntrar] = useState('Log in')

    async function handleButton() { // Trocar pra await try/catch depois se possivel

        setEntrar('')
        props.setHabilitado(true)

        axios.post(`${process.env.REACT_APP_API_URL}/login`, props.login)
            .then((res) => {
                console.log(res)
                props.setDadosUsuario(res.data)
                props.setHabilitado(false);
                navigate('/home')
            })
            .catch(() => {
                alert('Usuário ou senha incorretos')
                props.setHabilitado(false)
                setEntrar('Log in')
            })
    }

    return (
        <Wrapper>
            
            <TransparentBackground/>

            <Animated
                animationIn="fadeInDown"
                animationInDuration={1000}
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
                animationInDuration={1200}
                isVisible={true}
            >
                <StyledInputs>
                    <input
                        type='email'
                        placeholder="email"
                        disabled={props.habilitado}
                        onChange={e => props.setLogin({ ...props.login, email: e.target.value })}
                    />
                    <input
                        type='password'
                        placeholder="password"
                        disabled={props.habilitado}
                        onChange={e => props.setLogin({ ...props.login, password: e.target.value })}
                    />
                    <StyledButton onClick={() => handleButton()}>
                        {entrar === 'Log in' ? entrar : <ThreeDotsLoader />}
                    </StyledButton>
                </StyledInputs>

                <Link to='/cadastro'><p className="cadastro" > Don't have an account yet? Register</p></Link>
            </Animated>
        </Wrapper>
    )
}
