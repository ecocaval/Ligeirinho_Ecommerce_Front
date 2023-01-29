import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from 'react-image-gallery';
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";

import "react-image-gallery/styles/css/image-gallery.css";
import {
    AddButton, BackgroundPrice, BuyWrapper, checkerStyle, checkerStyle2, DescriptionTextArea,
    DescriptionTitle, DescriptionWrapper, DivisionLine, PageWrapper, ProductDescription,
    ProductFlex, ProductImages, ProductPageStyle, ProductPrice, ProductQuantity,
    ProductTitle, QuantityText, QuantityTextContainer, RestaurantInfo, SendButtonContainer,
    StyledMain, SubtractButton
} from "./ProductPageStyle";
import { useParams } from "react-router-dom";

export default function ProductPage({ dadosUsuario, setDadosUsuario }) {

    const {productId, restaurantId} = useParams()

    const [productRequested, setProductRequested] = useState({})
    const [productImages, setProductImages] = useState([])
    const [restaurantRequested, setRestaurantRequested] = useState({})
    const [productQuantity, setProductQuantity] = useState(1)
    const [receivedInfo, setReceivedInfo] = useState(false)
    const [userWantsDescription, setUserWantsDescription] = useState(false)
    const [userDescription, setUserDescription] = useState("")

    const productUrl = `${process.env.REACT_APP_API_URL}/restaurants/${restaurantId}/products/${productId}`
    const userToken = dadosUsuario.token
    const restaurantUrl = `${process.env.REACT_APP_API_URL}/restaurants`

    useEffect(() => {
        getProductInfo()
    }, [])

    async function getProductInfo() {

        let getResponse = await axios.get(productUrl, {
            headers: {
                authorization: userToken
            }
        })
        const product = getResponse.data
        const images = product.bigImages.map(image => ({
            original: image
        }))

        getResponse = await axios.get(`${restaurantUrl}/${product.restaurantId}`, {
            headers: {
                authorization: userToken
            }
        })
        const restaurant = getResponse.data

        setProductImages(images)
        setRestaurantRequested(restaurant)
        setProductRequested(product)
        setReceivedInfo(true)
    }

    async function sendOrder() {

        let userData = dadosUsuario

        if (!dadosUsuario) {
            const localStorageUserData = JSON.parse(localStorage.getItem('userInfo'))
            setDadosUsuario(localStorageUserData)
            userData = localStorageUserData
        }
        
        const cartRoute = `${process.env.REACT_APP_API_URL}/carts/${userData.userId}`

        const authorization = {
            headers: {
                authorization: userData.token
            }
        }

        try {
            await axios.post(cartRoute, {}, authorization)

            await axios.put(cartRoute, {
                productId: productRequested._id,
                quantity: productQuantity,
                description: userDescription
            }, authorization)

            // navigate('') //! Navegar para a página do carrinho de compras
        } catch (err) {
            console.log(err);
            alert("Houve um erro ao enviar o pedido!")
        }
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
                            <div>
                                <BsFillCheckCircleFill
                                    onClick={() => {
                                        if (userWantsDescription) setUserDescription("")
                                        setUserWantsDescription(!userWantsDescription)
                                    }}
                                    color={userWantsDescription ? "#30cf2d" : ""}
                                    style={userWantsDescription ? checkerStyle : {
                                        transition: "all 0.2s"
                                    }}
                                />
                                <BsXCircleFill
                                    onClick={() => {
                                        if (userWantsDescription) setUserDescription("")
                                        setUserWantsDescription(!userWantsDescription)
                                    }}
                                    color={!userWantsDescription ? "#e35219" : ""}
                                    style={!userWantsDescription ? checkerStyle2 : {
                                        transition: "all 0.2s",
                                        marginLeft: "5px"
                                    }}
                                />
                            </div>
                        </DescriptionTitle>
                        <DescriptionTextArea
                            disabled={!userWantsDescription}
                            userWantsDescription={userWantsDescription}
                            placeholder={userWantsDescription ? "Escreva sua descrição..." : ""}
                            type="text"
                            value={userDescription}
                            onChange={(e) => setUserDescription(e.currentTarget.value)}
                        />
                    </DescriptionWrapper>
                    <SendButtonContainer
                        userWantsDescription={userWantsDescription}
                        onClick={() => sendOrder()}
                    >
                        Enviar Pedido
                    </SendButtonContainer>
                </StyledMain>
            </PageWrapper>
            <Footer />
        </ProductPageStyle >
    )
}
