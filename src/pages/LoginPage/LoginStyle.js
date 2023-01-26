import styled from "styled-components"

export const LoginHome = styled.div`
    height: 100vh;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ff8d00;
    
    .cadastro   {
        text-align: center;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
    
    .animation  {
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
    
    h1  {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 68.982px;
        line-height: 86px;
        text-align: center;
        color: #000000;
    }
   
    p   {
        font-family: 'Playball';
    
    }
   
    img {
        width: 300px;
        margin-right: 80px;
    }
`

//! Reaproveitar esses LoginInputs aqui do CadastroStyle se possivelç
export const LoginInputs = styled.div`
    min-height:160px;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom:25px;
    margin-top:30px;

    input   {
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

export const Button = styled.button`

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