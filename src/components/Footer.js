import styled from "styled-components"
import {AiTwotoneHome} from 'react-icons/ai'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import {BsBasket} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'


export default function Footer(props){
    return(
        <Rodapé data-test = 'header'>
            <AiTwotoneHome className="svg"></AiTwotoneHome>
            <HiMagnifyingGlass className="svg"></HiMagnifyingGlass>
            <BsBasket className="svg" ></BsBasket>
            <BsPerson className="svg"></BsPerson>
            <img className="papaleguas" onClick={() => {
                 const audio = new Audio('./assets/audios/papaleguas.mp3')
                 audio.play();
            }} src={'./assets/img/papaleguas.gif'}></img>
            
        </Rodapé>
    )
}

export const Rodapé = styled.div`
z-index:1;
box-sizing: border-box;
padding: 0px 10px;
width: 100%;
height: 70px;
position:fixed;
left: 0px;
bottom: 0px;
background: #ff8d00;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
justify-content: space-between;
align-items:center;
.svg{
    color:white;
    font-size:30px;
}
p{
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
}

img {
    left: 50px;
    position: absolute;
    top: -23px;
    width: 120px;
}
`