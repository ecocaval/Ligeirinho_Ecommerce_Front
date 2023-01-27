import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from 'react-image-gallery';
import { BsFillCheckCircleFill } from "react-icons/bs";

import "react-image-gallery/styles/css/image-gallery.css";
import {
    AddButton, BackgroundPrice, BuyWrapper, checkerStyle, DescriptionTextArea,
    DescriptionTitle, DescriptionWrapper, DivisionLine, PageWrapper, ProductDescription,
    ProductFlex, ProductImages, ProductPageStyle, ProductPrice, ProductQuantity,
    ProductTitle, QuantityText, QuantityTextContainer, RestaurantInfo, SendButtonContainer,
    StyledMain, SubtractButton
} from "./ProductPageStyle";


export default function ProductPage() {

    const [productRequested, setProductRequested] = useState({})
    const [productImages, setProductImages] = useState([])
    const [restaurantRequested, setRestaurantRequested] = useState({})
    const [productQuantity, setProductQuantity] = useState(1)
    const [receivedInfo, setReceivedInfo] = useState(false)
    const [userWantsDescription, setUserWantsDescription] = useState(false)

    //! Temporario - debug 
    const exampleUrl = "http://localhost:5000/restaurants/63d30f2494d5e0d0a25d2c99/products/63d3129594d5e0d0a25d2ca9"
    const exampleToken = "Bearer 84101767-d4fc-451f-b0e2-73d6a546573c"
    const restaurantUrl = "http://localhost:5000/restaurants"

    useEffect(() => async () => {

        let getResponse = await axios.get(exampleUrl, {
            headers: {
                authorization: exampleToken
            }
        })
        const product = getResponse.data
        const images = product.bigImages.map(image => ({
            original: image
        }))

        getResponse = await axios.get(`${restaurantUrl}/${product.restaurantId}`, {
            headers: {
                authorization: exampleToken
            }
        })
        const restaurant = getResponse.data

        setProductImages(images)
        setRestaurantRequested(restaurant)
        setProductRequested(product)
        setReceivedInfo(true)
    }, [])

    function sendOrder() {
        //* Colocar aqui o post para criar novo carrinho ou put caso carrinho já exista
    }

    return (
        <ProductPageStyle>
            <Header />
            <PageWrapper>
                <StyledMain>
                    <section>
                        <ProductFlex>
                            <ProductTitle>
                                {receivedInfo ? productRequested.name : "Carregando..."}
                            </ProductTitle>
                            <RestaurantInfo>
                                {receivedInfo ?
                                    <>
                                        <img src={restaurantRequested.smallImages} alt="" />
                                        <p>{restaurantRequested.name}</p>
                                    </> :
                                    "Carregando..."
                                }
                            </RestaurantInfo>
                        </ProductFlex>
                        <ProductImages>
                            <ImageGallery
                                items={productImages}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                autoPlay={true}
                                slideInterval={5000}
                            />
                        </ProductImages>
                        <ProductDescription>
                            {receivedInfo ? productRequested.description : "Carregando..."}
                        </ProductDescription>
                    </section>

                    <DivisionLine />

                    <BuyWrapper>
                        <BackgroundPrice>
                            <ProductPrice>
                                R$ {receivedInfo ? String((productRequested.price * productQuantity).toFixed(2)) : "Carregando..."}
                            </ProductPrice>
                        </BackgroundPrice>
                        <ProductQuantity>
                            <AddButton
                                onClick={() => {
                                    if (productQuantity >= 10) return
                                    const quantity = productQuantity + 1
                                    setProductQuantity(quantity)
                                }}
                            >+</AddButton>
                            <QuantityTextContainer>
                                <QuantityText>{productQuantity}</QuantityText>
                            </QuantityTextContainer>
                            <SubtractButton
                                onClick={() => {
                                    if (productQuantity <= 1) return
                                    const quantity = productQuantity - 1
                                    setProductQuantity(quantity)
                                }}
                            >-</SubtractButton>
                        </ProductQuantity>
                    </BuyWrapper>
                    <DescriptionWrapper>
                        <DescriptionTitle>
                            <p>Deseja adicionar alguma observação?</p>
                            <BsFillCheckCircleFill
                                onClick={() => setUserWantsDescription(!userWantsDescription)}
                                color={userWantsDescription && "#30cf2d"}
                                style={userWantsDescription ? checkerStyle : {
                                    transition: "all 0.2s"
                                }}
                            />
                        </DescriptionTitle>
                        <DescriptionTextArea
                            disabled={!userWantsDescription}
                            userWantsDescription={userWantsDescription}
                            type="text"
                            placeholder={userWantsDescription && "Escreva sua descrição..."}
                        />
                    </DescriptionWrapper>
                    <SendButtonContainer
                        userWantsDescription={userWantsDescription}
                        onclick={() => sendOrder()}
                    >
                        Enviar Pedido
                    </SendButtonContainer>
                </StyledMain>
            </PageWrapper>
            <Footer />
        </ProductPageStyle >
    )
}
