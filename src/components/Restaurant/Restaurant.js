// import axios from "axios"
import { RestaurantStyled } from "./RestaurantStyle";
import React from "react";
import { AiFillStar } from 'react-icons/ai';
import {BsHeartFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'

export default function Restaurant(props) {
    const [clicked, setClicked] = React.useState(false)
    return (
        <>
            <RestaurantStyled>
                {/* Todos estes dados abaixo virão da API. pegar as props que virão e colocar nas devidas informações */}
                <img src={props.img} alt=""/>
                <div className="description">
                <h1>{props.name}</h1>
                <div className="star"><h2>{props.typeOfFood}</h2><p>4,5</p><AiFillStar className="svg"></AiFillStar></div>
                    
                  
                    
                </div>
                {clicked ? <div><BsHeartFill onClick={() => {
                    console.log('teste')
                    setClicked(!clicked)
                }} className="heart"></BsHeartFill></div> : <div><BsHeart onClick={() => {
                    console.log('teste coração vazio')
                    setClicked(!clicked)
                }} className="heart"></BsHeart></div> }
                
            </RestaurantStyled>
        </>
    )
}
