import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Section } from "../HomePage/HomeStyle";
import { NavBar } from "../HomePage/HomeStyle";
import { AiFillStar } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { Banner, Category, Product, SectionProduct, Image, Description, Price } from "./RestauranteDetailsStyled";
import { Products } from "./RestauranteDetailsStyled";
import React from "react";
import axios from "axios";

export default function RestaurantDetails(props) {
    console.log(props)
    const [products, setProducts] = React.useState()
    const config = {
        headers: {
            Authorization: props.dadosUsuario.token
        }
    }
    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/restaurants/${props.restaurantchoosed.id}`, config).then(resp => {
           console.log(props)
        })

    }, [])
    return (
        <>
            <Header></Header>
            <NavBar>
                {/* <img src={props.restaurantchoosed.img}></img> */}
                <h3 className="animated-text">{props.restaurantchoosed.name}</h3>
                <div className="star"><p>4,5</p><AiFillStar className="svg"></AiFillStar></div>
                <BsHeartFill className="heart"></BsHeartFill>


            </NavBar>
            <Section>

                <Banner>
                    <img src={props.restaurantchoosed.bigImages[0]}></img>
                </Banner>
                {/* fazer uma requisição get para os produtos do restaurante(/restaurants/:restaurantId/products). Espero receber imagem, preço, descrição e id pelo menos 
                logo dps fazer um map na lista q vou receber e renderizar os elementos abaixo*/}
                <SectionProduct>
                    <Category>BURGUERS</Category>
                <Products>
                    <Product onClick={() => {
                        props.setIdProduct('produto.id')

                    }}>
                        <Image src={props.restaurantchoosed.smallImages[0]} ></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    
                </Products>
                </SectionProduct>
                <SectionProduct>
                    <Category>SORVETES</Category>
                <Products>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>Sundae</Description>
                        <Price>R$ 11,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>Sundae</Description>
                        <Price>R$ 11,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>Sundae</Description>
                        <Price>R$ 11,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>Sundae</Description>
                        <Price>R$ 11,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>Sundae</Description>
                        <Price>R$ 11,99</Price>
                    </Product>
                    
                    
                </Products>
                </SectionProduct>
                <SectionProduct>
                    <Category>BURGUERS</Category>
                <Products>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.smallImages[0]}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    
                </Products>
                </SectionProduct>


            </Section>
            <Footer></Footer>
        </>
    )
}

