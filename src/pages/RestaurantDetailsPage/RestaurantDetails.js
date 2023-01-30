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
import { useNavigate } from "react-router";

export default function RestaurantDetails(props) {
    const navigate = useNavigate();
    console.log(props.restaurantchoosed)
    const [products, setProducts] = React.useState()
    console.log(products)
    const config = {
        headers: {
            Authorization: props.dadosUsuario.token
        }
    }
    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/restaurants/${props.restaurantchoosed._id}/products`, config).then(resp => {
            setProducts(resp.data)
            console.log(resp.data)
        })

    }, [])
    return (
        <>
            <Header></Header>
            <NavBar>
                {/* <img src={props.restaurantchoosed.smallImages[0]}></img> */}
                <h3 className="animated-text">{props.restaurantchoosed.name}</h3>
                <div className="star"><p>{props.restaurantchoosed.priceRank}</p><AiFillStar className="svg"></AiFillStar></div>
                <BsHeartFill className="heart"></BsHeartFill>
            </NavBar>
            <Section>
                <Banner>
                    <img src={props.restaurantchoosed.smallImages[0]}></img>
                </Banner>


                {props.restaurantchoosed.categories.map(c => (
                    <SectionProduct key={c}>
                        <Category>{c}</Category>
                        <Products>
                            {products !== undefined ? (
                                products
                                    .filter(p => p.category === c)
                                    .map(p => (
                                        <Product
                                            key={p.id}
                                            onClick={() => {
                                                props.setIdProduct(p.id);
                                                navigate(`/restaurant/${props.restaurantchoosed.id}/product/${p.id}`);
                                            }}
                                        >
                                            <Image src={p.smallImages[0]} />
                                            <Description>{p.name}</Description>
                                            <Price>{`R$ ${p.price}`}</Price>
                                        </Product>
                                    ))
                            ) : (
                                <p>Não há produtos para exibir</p>
                            )}
                        </Products>
                    </SectionProduct>
                ))}

            </Section>
            <Footer></Footer>
        </>
    )
}

