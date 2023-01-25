import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import { Imagem } from "./Login"


export default function Cadastro(props){
    const navigate=useNavigate();
    const [usuario, setUsuario] = React.useState({email:'',name:'',password:'',passwordConfirmation:''})
    const[entrar, setEntrar] = React.useState('Register')
    console.log(usuario)

   
    
    return(
        <Home>
        <Imagem>
        
        <img src="./assets/img/papaleguas.gif"></img>
                    <h1>Ligeirinho</h1>
                    <p>Seu pedido em até 30 minutos</p>

        </Imagem>
        <Inputs>

        <input  type='text' placeholder="name" value={usuario.name} onChange={e => setUsuario({...usuario, name: e.target.value})} disabled={props.habilitado}></input>
        <input type='email' placeholder="e-mail" value={usuario.email} onChange={e => setUsuario({...usuario, email: e.target.value})} disabled={props.habilitado}></input>
        <input type='password' placeholder="password" onChange={e => setUsuario({...usuario, password: e.target.value})} disabled={props.habilitado}></input>
        <input  type='password' placeholder="confirm password" onChange={e => setUsuario({...usuario, passwordConfirmation: e.target.value})} disabled={props.habilitado}></input>

        <Button onClick={() => {
            setEntrar('')
            props.setHabilitado(true)
            axios.post('https://carterita-api.onrender.com/signup', usuario).then(()=>  {
                props.setHabilitado(false);
                navigate('/')
        }).catch(() => {
            alert('Não foi possível cadastrar o usuário.')
            props.setHabilitado(false)
            setEntrar('Register')
        })
        }}> {entrar==='Register' ? entrar : <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="white" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
         />}
         </Button>

        </Inputs>
        <Link to='/'><p className="cadastro" > Already have an account? Log in!</p></Link>

        </Home>
    )
}


const Home=styled.div`
height: 100vh;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
background:#ff8d00;
.cadastro{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
}
`



const Inputs= styled.div`

min-height:280px;
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
`