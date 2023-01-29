import Header from "../../components//Header/Header"
import Footer from "../../components/Footer/Footer"
import React, { useEffect, useState } from "react"
import Restaurant from "../../components/Restaurant/Restaurant";
import { BlackPage, EvenNavText, FilterDivision, FilterModal, FilterWrapper, HomePageWrapper, LeftSection, ModalDivisionLine, OddNavText, OutSideBar, ProductsTitleWrapper, ProductsWrapper, RightSection, Section, SelectButton, SideBar, StyledTitleProducts, StyledTitleRestaurants } from "./HomeStyle";
import axios from "axios";
import { NavBar } from "./HomeStyle";
import { typesOfFoodBig } from "./typesOfFood";
import Product from "../../components/Product/Product";
import { Animated } from "react-animated-css";
import { v4 as uuidv4 } from 'uuid'

import { BsFilterLeft, BsDot } from "react-icons/bs";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { AiOutlineFieldTime } from "react-icons/ai";

export default function Home(props) {

    const [click, setClick] = useState(false)

    const [productsData, setProductsData] = useState([])
    const [filterWasRequested, setFilterWasRequested] = useState(false)

    const connectionString = process.env.REACT_APP_API_URL

    useEffect(() => {
        let userData = props.dadosUsuario

        if (!props.dadosUsuario) {
            const localStorageUserData = JSON.parse(localStorage.getItem('userInfo'))
            props.setDadosUsuario(localStorageUserData)
            userData = localStorageUserData
        }

        const authorization = {
            headers: {
                Authorization: userData.token
            }
        }

        getRestaurants(authorization)
        getProducts(authorization)
    }, [])

    async function getRestaurants(authorization) {
        try {
            const restaurants = await axios.get(`${connectionString}/restaurants`, authorization)
            if (restaurants) {
                props.setRestaurantData(restaurants.data)
            }
        } catch (err) {
            console.log(err);
            alert("Houve um erro ao receber os restaurantes!")
        }
    }

    async function getProducts(authorization) {
        try {
            const products = await axios.get(`${connectionString}/products`, authorization)
            setProductsData(products.data)
        } catch (err) {
            console.log(err);
            alert("Houve um erro ao receber os produtos!")
        }
    }

    function sortRestaurantsByPriceRank() {
        let restaurants = [...props.restaurantData]
        let restaurantsNames = restaurants.map(r => r.name).sort()
        let restaurantsOrdered = []

        for (let i = 0; i < restaurants.length; i++) {
            for (let j = 0; j < restaurants.length; j++) {
                if (restaurants[j].name === restaurantsNames[i]) {
                    restaurantsOrdered[i] = restaurants[j]
                    break
                }
            }
        }
        props.setRestaurantData(restaurantsOrdered)
    }

    function sortRestaurantsByLike() {
        //! To do
    }

    if (props.restaurantData === undefined) {
        return;
    } else {
        return (
            <HomePageWrapper>
                {
                    filterWasRequested &&
                    <BlackPage onClick={() => setFilterWasRequested(false)}>
                        <FilterModal>
                            <p>Como deseja filtrar?</p>
                            <ModalDivisionLine />
                            <FilterDivision>
                                <BsDot color="#000000" style={{ fontSize: "20px" }} />
                                <p>Like</p>
                                <FaHeart color="red" style={{ fontSize: "20px" }} />
                                <SelectButton onClick={(e) => {
                                    e.stopPropagation()
                                    sortRestaurantsByLike()
                                }} />
                            </FilterDivision>
                            <FilterDivision>
                                <BsDot color="#000000" style={{ fontSize: "20px" }} />
                                <p>Ordem alfabética</p>
                                <RxLetterCaseCapitalize color="gray" style={{ fontSize: "20px" }} />
                                <SelectButton onClick={(e) => {
                                    e.stopPropagation()
                                    sortRestaurantsByPriceRank()
                                }} />
                            </FilterDivision>
                            <FilterDivision>
                                <BsDot color="#000000" style={{ fontSize: "20px" }} />
                                <p>Preço</p>
                                <CiMoneyBill color="green" style={{ fontSize: "20px" }} />
                                <SelectButton onClick={(e) => {
                                    e.stopPropagation()
                                }} />
                            </FilterDivision>
                            <FilterDivision>
                                <BsDot color="#000000" style={{ fontSize: "20px" }} />
                                <p>Pedidos mais recentes</p>
                                <AiOutlineFieldTime style={{ fontSize: "20px" }} />
                                <SelectButton onClick={(e) => {
                                    e.stopPropagation()
                                }} />
                            </FilterDivision>
                        </FilterModal>
                    </BlackPage>
                }

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
                        <ProductsTitleWrapper>
                            <StyledTitleRestaurants>Nossos Parceiros</StyledTitleRestaurants>
                            <FilterWrapper onClick={() => setFilterWasRequested(true)}>
                                <BsFilterLeft
                                    style={{
                                        fontSize: "28px",
                                    }} />
                            </FilterWrapper>
                        </ProductsTitleWrapper>
                        {props.restaurantData?.length !== 0 ? props.restaurantData.map(r => {
                            return (
                                <Restaurant
                                    key={uuidv4()}
                                    img={r.smallImages[0]}
                                    typeOfFood={r.typeOfFood}
                                    name={r.name}
                                    priceRank={r.priceRank}
                                    // categories={r.categories}
                                    setRestaurantData={props.setRestaurantData}
                                    setRestaurantChoosed={props.setRestaurantChoosed}
                                >
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
