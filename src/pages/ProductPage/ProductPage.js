import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from 'react-image-gallery';
import { BsFillCheckCircleFill } from "react-icons/bs";
import "react-image-gallery/styles/css/image-gallery.css";


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

    //* Estilo do Icon ao lado da descrição quando ativo
    const checkerStyle = {
        transition: "all 0.2s",
        boxShadow: "0px 0px 15px 0px #9aeb98",
        borderRadius: "12px",

        ":hover": {
            cursor: "pointer"
        }
    }

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

    return (
        <ProductPageStyle>
            <Header />
            <Wrapper>
                <StyledMain>
                    <ProductWrapper>
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
                    </ProductWrapper>

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
                        <DescriptionInput
                            disabled={!userWantsDescription}
                            userWantsDescription={userWantsDescription}
                            type="text"
                            placeholder={userWantsDescription && "Escreva sua descrição..."}
                        />
                    </DescriptionWrapper>
                </StyledMain>
            </Wrapper>
            <Footer />
        </ProductPageStyle >
    )
}

const ProductPageStyle = styled.main`
    font-family: 'Barlow Condensed';
`

const ProductFlex = styled.div`
    position: relative;
    display: flex;
    max-width: 600px;
    height: 50px;
    margin: 30px auto;
`

const StyledMain = styled.main`
    margin: auto;
    position: fixed;
    width: 100%;
    height: calc(100% - 140px);
    z-index: 1;
    padding-bottom: 30px;
    overflow-y: scroll;
`

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`

const ProductWrapper = styled.section`
`

const ProductTitle = styled.div`
    font-size: 35px;
    text-align: center;
    min-width: 135px;
    max-width: 160px;
    word-wrap: break-word;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s;

    @media (max-width: 450px) {
        transform: translate(-90%, -50%);
    }

    @media (max-width: 320px) {
        transform: translate(-50%, -50%);
    }
`

const RestaurantInfo = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
    opacity: 1;

    @media (max-width: 320px) {
        opacity: 0;
    }

    img {
        width: 30px;
        border-radius: 30px;
        z-index: 2;
    }

    p {
        margin-left: -10px;
        background-color: lightgray;
        padding: 5px 7px 5px 15px;
        border-radius: 0px 10px 10px 0px;
    }
`

const ProductImages = styled.figure`
    max-width: 600px;
    margin: 10px auto;
    overflow: hidden;
    border: 2px solid #ff8d00;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);  

    @media (max-width: 620px) {
        margin: 10px 20px;
    }

    img {
        max-width: 400px;
        height: 230px;
    }
`

const ProductDescription = styled.p`
    font-family: 'Barlow Condensed';
    font-size: 20px;
    max-width: 600px;
    margin: 20px auto;
    text-align: center;
    padding: 0px 20px;
    text-overflow: ellipsis;
`

const DivisionLine = styled.section`
    border: 1px solid #ff8d00;
    margin: 20px auto;
`

const BuyWrapper = styled.section`
    border: 2px solid #ff8d00;
    border-radius: 20px;
    width: 50%;
    max-width: 250px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 450px) { 
        flex-direction: column;
        min-width: 120px;
        /* height: 100px; */
    }
`

const BackgroundPrice = styled.div`
    width: fit-content;
    padding: 0px 10px;
    border-radius: 20px 0px 0px 20px;
    height: 40px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5;

    @media (max-width: 450px) { 
        width: 100%;
        border-radius: 20px 20px 0px 0px;
    }
`

const ProductPriceContainer = styled.div`
`

const ProductPrice = styled.p`
    text-align: center;
    font-size: 20px;
`

const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15%;
    transition: all 0.3s;

    @media (max-width: 450px) { 
        margin: 20px 0;
    }
`

const AddButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #18a33d;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-right: -5px;
    z-index: 2;
    transition: all 0.2s linear;

    &:hover {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8); 
        cursor: pointer; 
    }
`

const QuantityTextContainer = styled.div`
    width: 40px;
    height: 25px;
    border: 1.5px solid lightgray;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const QuantityText = styled.p`
    font-size: 19px;
`

const SubtractButton = styled.button`
    text-align: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #a3183b;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-left: -5px;
    z-index: 2;

    &:hover {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8); 
        cursor: pointer; 
    }
`

const DescriptionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: auto;
`

const DescriptionTitle = styled.div`
    margin: 20px auto;
    font-size: 22px;
    color: gray;
    text-align: center;
    display: flex;
    align-items: center;
    transition: all 0.5s;

    @media (max-width: 320px) {
        flex-direction: column;
        gap: 15px;
        max-width: 180px;
    }

    p {
        margin-right: 10px;

        @media (max-width: 320px) {
            margin-right: 0;
        }
    }
`

const DescriptionInput = styled.textarea`
    font-family: 'Barlow Condensed';
    white-space: pre-wrap; 
    font-size: 20px;
    padding: 15px;
    width: 50%;
    min-width: 250px;
    max-width: 600px;
    height: ${props => props.userWantsDescription ? "200px" : "0px"};
    margin: auto;
    transition: all 0.2s ease-out ;
    border: ${props => props.userWantsDescription ? "1px lightgray solid;" : "none"};
    box-shadow: ${props => props.userWantsDescription ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "none"};
    background-color: #ffffff;
    transition: all 0.3s;

    @media (max-width: 270px) {
        min-width: 80%;
    }
`

