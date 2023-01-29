import Header from "../../components//Header/Header"
import Footer from "../../components/Footer/Footer"
import React, { useEffect, useState } from "react"
import Restaurant from "../../components/Restaurant/Restaurant";
import { EvenNavText, HomePageWrapper, LeftSection, OddNavText, OutSideBar, ProductsWrapper, RightSection, Section, SideBar, StyledTitleProducts, StyledTitleRestaurants } from "./HomeStyle";
import axios from "axios";
import { NavBar } from "./HomeStyle";
import { typesOfFoodBig } from "./typesOfFood";
import Product from "../../components/Product/Product";
import { Animated } from "react-animated-css";
import { v4 as uuidv4 } from 'uuid'

export default function Home(props) {

    const [click, setClick] = useState(false)

    const [productsData, setProductsData] = useState([])

    const connectionString = process.env.REACT_APP_API_URL

    const authorization = {
        headers: {
            Authorization: props.dadosUsuario.token
        }
    }

    useEffect(() => {
        axios.get(`${connectionString}/restaurants`, authorization).then(resp => {
            props.setRestaurantData(resp.data)
        })
    }, [])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        try {
            const products = await axios.get(`${connectionString}/products`, authorization)
            setProductsData(products.data)
        } catch (err) {
            console.log(err);
            alert("Houve um erro ao receber os produtos!")
        }
    }

    if (props.restaurantData === undefined) {
        return;
    } else {
        return (
            <HomePageWrapper>
                <SideBar click={click} />
                <OutSideBar click={click} onClick={() => setClick(!click)} />
                <Header setClick={setClick} />
                <Footer />
                <NavBar>
                    {typesOfFoodBig.map((type, index) => (
                        index % 2 === 0 ? (
                            <OddNavText key={uuidv4()}>{type}</OddNavText>
                        ) : (
                            <EvenNavText key={uuidv4()}>{type}</EvenNavText>
                        )
                    ))}
                </NavBar>
                <Section>
                    <LeftSection>
                        <StyledTitleRestaurants>Nossos Parceiros</StyledTitleRestaurants>
                        {props.restaurantData?.length !== 0 ? props.restaurantData.map(r => {
                            return (
                                <Restaurant
                                    key={uuidv4()}
                                    img={r.smallImages[0]}
                                    typeOfFood={r.typeOfFood}
                                    name={r.name}
                                    setRestaurantChoosed={props.setRestaurantChoosed}>
                                </Restaurant>)
                        }) : ''}
                    </LeftSection>
                    <RightSection>
                        <Animated
                            animationIn="fadeInRight"
                            animationInDuration={800}
                            isVisible={true}
                        >
                            <StyledTitleProducts>Alguns de nossos produtos</StyledTitleProducts>
                            <ProductsWrapper>
                                {productsData.map(product => (
                                        <Product
                                            key={uuidv4()}
                                            img={product.smallImages[0]}
                                            name={product.name}
                                            price={product.price}
                                            description={product.description}
                                            productId={product._id}
                                            restaurantId={product.restaurantId}
                                        />
                                ))}
                            </ProductsWrapper>
                        </Animated>
                    </RightSection>
                </Section>
            </HomePageWrapper >
        )
    }
}