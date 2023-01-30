// import { Animated } from "react-animated-css";
import Header from "../../components//Header/Header"
import Footer from "../../components/Footer/Footer"
import React from "react"
import Restaurant from "../../components/Restaurant/Restaurant";
import { OutSideBar, Section, SideBar } from "./HomeStyle";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavBar } from "./HomeStyle";

export default function Home(props) {

    console.log(props)
    const [click, setClick] = React.useState(false)
    const config = {
        headers: {
            Authorization: props.dadosUsuario.token
        }
    }
    // console.log(props.restaurantData)
    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/restaurants`, config).then(resp => {
            // console.log(resp)
            props.setRestaurantData(resp.data)
        })

    }, [])


    if (props.restaurantData === undefined) {
        return;
    } else {
        return <>
            <SideBar click={click}>

            </SideBar>
            <OutSideBar click={click} onClick={() => setClick(!click)}>

            </OutSideBar>
            <Header setClick={setClick}>

            </Header>
            <Footer>

            </Footer>
            <NavBar>
                {/* Ao clicar em algum tipo de comida deve-se guardar o nome do tipo de comida em um estado. Daí em <Section/> deve-se fazer um filter do props.restaurantData.typeOfFood comparando como estado */}
                <p>Todos</p>
                <p>Japonesa</p>
                <p>Brasileira</p>
                <p>Pizza</p>
                <p>Doces</p>
                <p>Lanches</p>
                <p>Açaí</p>
            </NavBar>
            <Section>
                {/* para filtrar os restaurantes pelo tipo de comida misturar filter com map */}
                {props.restaurantData?.length !== 0 ? props.restaurantData.map(r => { return <Restaurant restaurant={r} setRestaurantChoosed={props.setRestaurantChoosed}></Restaurant> }) : ''}



            </Section>
        </>
    }


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
//  </Animated> 000000000000000000000000000000000000