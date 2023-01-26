import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import React from "react"
import { Animated } from "react-animated-css";
import Restaurant from "./Restaurant";

export default function Home() {
    const [click, setClick] = React.useState(false)
    console.log(click)
    return (
        <>
            {/* <Animated className="animation" animationIn="slideInLeft" animationOut="slideOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>  */}
            <SideBar click={click} >
                aksljdklasdjasdlkasjdlk
                aslkdmlaskdjas
                laksjdlkasdjkls
                kasljdkasd
            </SideBar>
            {/* </Animated>  */}
            {/* <Animated animationIn="slideInRight" animationOut="slideInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
            <OutSideBar click={click} onClick={() => setClick(!click)} ></OutSideBar>
            {/* </Animated> */}
            <Header setClick={setClick}></Header>
            <Footer></Footer>
            <Section>
                {/* Aqui deve-se fazer um map na lista de restaurantes. Cada informação do restaurante (imagem, nome e descrição) devem ir como props para o componente Restaurant */}
                <Restaurant >
                    
                </Restaurant>

            </Section>



        </>

    )
}
export const Section = styled.div`
        top: 70px;
    position: fixed;
    height: calc(100% - 140px);
    width: 100%;
    z-index: 0;
    padding: 10px;
    box-sizing: border-box;
`



const SideBar = styled.div`
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
    box-sizing: border-box;
    

`
const OutSideBar = styled.div`
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
