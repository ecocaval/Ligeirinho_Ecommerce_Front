import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import React from "react"
import { Animated } from "react-animated-css";

export default function Home() {
    const [click, setClick] = React.useState(false)
    console.log(click)
    return (
        <>
            {/* <Animated animationIn="slideInLeft" animationOut="slideOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
                <SideBar click={click} ></SideBar>
            {/* </Animated> */}
            {/* <Animated animationIn="slideInRight" animationOut="slideInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
                <OutSideBar click={click} onClick={() => setClick(!click)} ></OutSideBar>
            {/* </Animated> */}

            <Header setClick={setClick}></Header>
            <Footer></Footer>
        </>

    )
}

const SideBar = styled.div`
    width:50%;
    height:100%;
    position:absolute;
    top:0px;
    left:${props => props.click ? '0px' : '-188px'};
    background:white;
    z-index:1;
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
    z-index:1;
    opacity: 50%;

`
