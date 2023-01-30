// import axios from "axios"
import { RestaurantStyled } from "./RestaurantStyle";
import React from "react";
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function Restaurant(props) {

    const [clicked, setClicked] = React.useState(false)
    const navigate = useNavigate()

    return (
        <>
            <RestaurantStyled onClick={() => {
                props.setRestaurantChoosed(props.restaurant)
                navigate('/restaurant')
            }}>
                <main className='restaurant-wrapper'>
                    <img src={props.restaurant.smallImages[0]} alt="" />
                    <div className="description">
                        <h1>{props.restaurant.name}</h1>
                        <div className="star">
                            <h2>{props.restaurant.typeOfFood}</h2>
                            <p>{props.restaurant.priceRank.toFixed(1)}</p>
                            <AiFillStar className="svg" />
                        </div>
                    </div>
                </main>

                {clicked ?
                    <div onClick={(e) => {
                        e.stopPropagation()
                        setClicked(!clicked)
                    }}>
                        <FaHeart className="heart"/>
                    </div>
                    :
                    <div onClick={(e) => {
                        e.stopPropagation()
                        setClicked(!clicked)
                    }}>
                        <FaHeart className="heart-mini" />
                    </div>
                }
            </RestaurantStyled>
        </>
    )
}

