import styled from "styled-components"

export const Section = styled.div`
    top:105px;
    position: fixed;
    height: calc(100% - 175px);
    width: 100%;
    z-index: 0;
    padding: 10px;
    overflow-y:auto;
    a{
        text-decoration: none;
    }
`

export const NavBar= styled.div`
overflow-x: auto;
display: flex;
position: absolute;
top:70px;
height: 35px;
width: 100%;
padding:10px;
border-top: 1px solid #928484;
border-bottom: 1px solid #928484;
p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    margin-right: 10px;
    text-align: center;
}

h3{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    margin-right: 10px;
    text-align: center;
    
}


.animated-text {
  animation: animation-title 5s ease-in-out forwards;
  position: absolute;
  left: -100%;
  opacity: 0;
}

@keyframes animation-title {
  0% {
    left: -100%;
    opacity: 0;
  }
  100% {
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }
}



`



export const SideBar = styled.div`
    display: ${props => props.click ? 'block' : "none"};
    width:50%;
    height:100%;
    position:absolute;
    top:0px;
    left:0;
    background:white;
    z-index:2;
    border-style: solid;
    border-color: #ff8d00;
    border-width: 6px;   
`

export const OutSideBar = styled.div`
    display: ${props => props.click ? 'block' : "none"};
    width:50%;
    height:100%;
    position:absolute;
    top:0px;
    right:0px;
    background:black;
    z-index:2;
    opacity: 50%;   
`