import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Animated } from "react-animated-css";

export default function Login(props) {
 
    React.useEffect(() => {
        const audio = new Audio('./assets/audios/papaleguas.mp3')
        audio.play();
    }, [])
    

    const navigate = useNavigate();
    const [entrar, setEntrar] = React.useState('Log in')
   

    return (

        
            <Home>
               
                <Animated animationIn="slideInLeft" animationOut="slideOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <Imagem>
                    <img src="./assets/img/papaleguas.gif"></img>
                    <h1>Ligeirinho</h1>
                    <p>Seu pedido em até 30 minutos</p>
                </Imagem>
                </Animated>
                
                <Animated   animationIn="slideInRight" animationOut="slideInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <Inputs>

                    <input  type='email' placeholder="email" disabled={props.habilitado} onChange={e => props.setLogin({ ...props.login, email: e.target.value })}></input>
                    <input type='password' placeholder="password" disabled={props.habilitado} onChange={e => props.setLogin({ ...props.login, password: e.target.value })}></input>

                    <Button  onClick={() => {
                        setEntrar('')
                        props.setHabilitado(true)
                        axios.post(`${process.env.REACT_APP_API_URL}/login`, props.login).then((res) => {
                            console.log(res.data.id)
                            props.setDadosUsuario(res.data)
                            props.setHabilitado(false);
                            console.log(res)
                            navigate('/home')
                        }).catch(() => {
                            alert('Usuário ou senha incorretos')
                            props.setHabilitado(false)
                            setEntrar('Log in')

                        })
                    }} > {entrar === 'Log in' ? entrar : <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />}</Button>

                </Inputs>
                <Link to='/cadastro'><p className="cadastro" > Don't have an account yet? Register</p></Link>
                </Animated>
            </Home>

     



    )
}


const Home = styled.div`
height: 100vh;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
background: #ff8d00;
.cadastro{
    text-align: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
}
.animation{
    display:flex;
    flex-direction: column;
    align-items: center;
}
`

export const Imagem = styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
h1{
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    text-align: center;
    color: #000000;
}
p{
    font-family: 'Playball';
   
}
img{
    width: 300px;
    margin-right: 80px;
}
`


const Inputs = styled.div`

min-height:160px;
display:flex;
justify-content: space-between;
flex-direction: column;
margin-bottom:25px;
margin-top:30px;
input{
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color:  #000000;
}
`

const Button = styled.button`
    background: #eda428;
    border-radius: 4.63636px;
    width: 303px;
    height: 45px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    color: #FFFFFF;
    display:flex;
    justify-content: center;
    align-items:center;
    transition: all 0.3s linear;
    :hover{
        scale: 0.9;
        
    }
`