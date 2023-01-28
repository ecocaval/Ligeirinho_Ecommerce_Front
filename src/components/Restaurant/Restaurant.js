// import axios from "axios"
import { RestaurantStyled } from "./RestaurantStyle";
import React from "react";
import { AiFillStar } from 'react-icons/ai';
import {BsHeartFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

export default function Restaurant(props) {
    const [clicked, setClicked] = React.useState(false)
    const navigate=useNavigate()
    return (
        <>
            <RestaurantStyled onClick={() => {
                    // console.log('teste')
                    props.setRestaurantChoosed({name: props.name, typeOfFood: props.typeOfFood, img: props.img})
                    navigate('/restaurant')
                }}>
                {/* Todos estes dados abaixo virão da API. pegar as props que virão e colocar nas devidas informações */}
                <img src={props.img} alt="" />
                <div className="description">
                <h1>{props.name}</h1>
                <div className="star"><h2>{props.typeOfFood}</h2><p>4,5</p><AiFillStar className="svg"></AiFillStar></div>
                    
                  
                    
                </div>
                {clicked ? <BsHeartFill onClick={() => {
                    // console.log('teste')
                    setClicked(!clicked)
                }} className="heart"></BsHeartFill> : <BsHeart onClick={() => {
                    // console.log('teste coração vazio')
                    setClicked(!clicked)
                }} className="heart"></BsHeart> } 
                {/* esses eventos de onclick nao estão funcionando. Parece que o react-icon nao reconhece o click. Resolver isso */}
                
            </RestaurantStyled>
        </>
    )
}
