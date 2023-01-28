import styled from "styled-components"

export const Wrapper = styled.div`
    height: 100vh;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ff8d00;

    .animated-image {
  animation: slide-in 5s linear infinite, flip 0.1s linear 1;
  position: relative; 
  animation-direction: alternate;
}


.animated-image {
  animation: slide-in 3s linear infinite;
  position: relative; 
}

@keyframes slide-in {
  0% {
    transform: translateX(-100%); /* começa fora da tela à esquerda */
  }
  100% {
    transform: translateX(100%); /* move para a direita e sai da tela */
  }
}



    
    a {
        text-decoration: none;
    }
    
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
export const StyledImage = styled.div`   
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

export const StyledInputs = styled.div`

    display:flex;
    width: 300px;
    flex-direction: column;
    /* border: 2px blue solid; */
    margin: 30px auto;

    input   {
        margin: auto;
        margin-bottom: 25px;
        padding: 10px;
        width: 300px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        color:  #000000;
        transition: all 0.4s;
     
        &:focus {
            width: 320px;
            height: 50px;
            transform: translate(-10px, 0); 
        }
    }
`

export const StyledButton = styled.button`

    background: #eda428;
    border-radius: 5px;
    border: none;
    width: 300px;
    height: 45px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    display:flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s linear;
    
    :hover{
        scale: 0.96;        
        cursor: pointer;
    }
`