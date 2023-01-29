import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductImage, ProductInfo, ProductStyled } from "./ProductStyle";

export default function Product(props) {

    const navigate = useNavigate()
    const { productId, restaurantId} = props

    return (
        <>
            <ProductStyled onClick={() => {
                navigate(`/restaurant/${restaurantId}/product/${productId}`)
            }}>
                {/* Todos estes dados abaixo virão da API. pegar as props que virão e colocar nas devidas informações */}
                <ProductImage>
                    <img src={props.img} alt="" />
                </ProductImage>

                <ProductInfo>
                    <h1>{props.name}</h1>
                    <div>
                        <p>R$ {props.price.toFixed(2)}</p>
                    </div>
                </ProductInfo>
            </ProductStyled>
        </>
    )
}