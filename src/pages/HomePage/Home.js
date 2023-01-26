// import { Animated } from "react-animated-css";
import Header from "../../components//Header/Header"
import Footer from "../../components/Footer/Footer"
import React from "react"
import Restaurant from "../../components/Restaurant/Restaurant";
import { OutSideBar, Section, SideBar } from "./HomeStyle";

export default function Home() {

    const [click, setClick] = React.useState(false)

    return (
        <>
            <SideBar click={click}>

            </SideBar>
            <OutSideBar click={click} onClick={() => setClick(!click)}>

            </OutSideBar>
            <Header setClick={setClick}>

            </Header>
            <Footer>

            </Footer>
            <Section>
                {/* Aqui deve-se fazer um map na lista de restaurantes. Cada informação do restaurante (imagem, nome e descrição) devem ir como props para o componente Restaurant */}
                <Restaurant>

                </Restaurant>
            </Section>
        </>
    )
}

//  <Animated 
//     className="animation" 
//     animationIn="slideInLeft" 
//     animationOut="slideOutRight" 
//     animationInDuration={1000} 
//     animationOutDuration={1000} 
//     isVisible={true}
//     >  
//  </Animated>  
//  <Animated 
//     animationIn="slideInRight" 
//     animationOut="slideInLeft" 
//     animationInDuration={1000} 
//     animationOutDuration={1000} 
//     isVisible={true}> 
//  </Animated> 