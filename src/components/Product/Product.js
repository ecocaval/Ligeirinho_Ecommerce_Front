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