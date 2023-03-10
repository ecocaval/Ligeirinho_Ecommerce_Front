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
import { ThreeDots } from "react-loader-spinner";

export default function RestaurantDetails(props) {
    const navigate = useNavigate();
   
    const [products, setProducts] = React.useState()
    
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
                                                console.log(p.id)
                                                props.setIdProduct(p._id);
                                                navigate(`/restaurant/${props.restaurantchoosed._id}/product/${p._id}`);
                                            }}
                                        >
                                            <Image src={p.smallImages[0]} />
                                            <Description>{p.name}</Description>
                                            <Price>{`R$ ${p.price}`}</Price>
                                        </Product>
                                    ))
                            ) : (
                                <div  className="loader"><ThreeDots></ThreeDots></div>
                            )}
                        </Products>
                    </SectionProduct>
                ))}

            </Section>
            <Footer></Footer>
        </>
    )
}

