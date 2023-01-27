import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


export default function ProductPage() {

    const [productRequested, setProductRequested] = useState({})
    const [productImages, setProductImages] = useState([])
    const [restaurantRequested, setRestaurantRequested] = useState({})
    const [receivedInfo, setReceivedInfo] = useState(false)

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

        // console.log(restaurantId);

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
        <>
            <Header />
            <Wrapper>
                <StyledMain>
                    <ProductWrapper>
                        <ProductFlex>
                            <ProductTitle>
                                {receivedInfo ? "Macarrão com Queijo" : "Carregando..."}
                            </ProductTitle>
                            <RestaurantInfo>
                                {receivedInfo ?
                                    <>
                                        <img src={restaurantRequested.smallImages} alt=""/>
                                        <p>{restaurantRequested.name}</p>
                                    </> :
                                    "Carregando..."
                                }
                            </RestaurantInfo>
                        </ProductFlex>

                        <ProductImages>
                            <ImageGallery
                                items={productImages}
                            />
                        </ProductImages>
                        <ProductDescription>
                            {receivedInfo ? productRequested.description : "Carregando..."}
                        </ProductDescription>
                    </ProductWrapper>
                    <BuyWrapper>
                        <ProductPrice>

                        </ProductPrice>
                        <ProductQuantity>

                        </ProductQuantity>
                    </BuyWrapper>
                    <DescriptionWrapper>
                        <DescriptionTitle></DescriptionTitle>
                        <DescriptionInput />
                    </DescriptionWrapper>


                </StyledMain>
            </Wrapper>
            <Footer />
        </>
    )
}

const ProductFlex = styled.div`
    position: relative;
    display: flex;
    max-width: 600px;
    height: 50px;
    margin: 20px auto;
    /* border: 2px blue solid; */
`

const StyledMain = styled.main`
    margin: auto;
    /* background-color: blue; */
    position: fixed;
    margin-top: 140px;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow-y: scroll;
`

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`

const ProductWrapper = styled.section`
    font-family: 'Barlow Condensed';
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
    /* border: 2px solid green; */

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
    /* height: 80%; */
    /* border: 2px green solid; */
    max-width: 600px;
    margin: 10px auto;
    /* margin: 0 30px; */
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
        /* border: 2px blue solid; */
    }
`

const ProductDescription = styled.p`
    font-family: 'Barlow Condensed';
    font-size: 20px;
    max-width: 600px;
    max-height: 120px;
    margin: 20px auto;
    text-align: center;
    padding: 0px 20px;
    overflow: hidden; //! Fix later, should not remove the text
    text-overflow: ellipsis;
`

const BuyWrapper = styled.section`
    border: 2px solid #ff8d00;
`

const ProductPrice = styled.div`

`

const ProductQuantity = styled.div`

`

const DescriptionWrapper = styled.section`

`

const DescriptionTitle = styled.p`

`

const DescriptionInput = styled.input`
    display: none;
`

