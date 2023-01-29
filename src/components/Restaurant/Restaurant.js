// import axios from "axios"
import { RestaurantStyled } from "./RestaurantStyle";
import React from "react";
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function Restaurant(props) {
    console.log(props)
    const [clicked, setClicked] = React.useState(false)
    const navigate = useNavigate()

    return (
        <>
            <RestaurantStyled onClick={() => {
                props.setRestaurantChoosed({ name: props.name, typeOfFood: props.typeOfFood, img: props.img })
                navigate('/restaurant')
            }}>
                <main className='restaurant-wrapper'>
                    <img src={props.img} alt="" />
                    <div className="description">
                        <h1>{props.name}</h1>
                        <div className="star">
                            <h2>{props.typeOfFood}</h2>
                            <p>4,5</p>
                            <AiFillStar className="svg" />
                        </div>
                    </div>
                </main>

                {clicked ?
                    <div onClick={(e) => {
                        e.stopPropagation()
                        setClicked(!clicked)
                    }}>
                        <FaHeart className="heart" />
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
