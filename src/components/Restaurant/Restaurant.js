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
                            <p>{props.restaurant.priceRank}</p>
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



// // import axios from "axios"
// import { RestaurantStyled } from "./RestaurantStyle";
// import React from "react";
// import { AiFillStar } from 'react-icons/ai';
// import { useNavigate } from "react-router-dom";
// import { BsHeart, BsHeartFill } from "react-icons/bs";

// export default function Restaurant(props) {
//     console.log(props)
//     const [clicked, setClicked] = React.useState(false)
//     const restauranttName = props.name
//     const navigate = useNavigate()

//     return (
//         <>
//             <RestaurantStyled onClick={() => {
//                     // console.log('teste')
//                     props.setRestaurantChoosed(props.restaurant)
//                     navigate('/restaurant')
//                 }}>
//                 {/* Todos estes dados abaixo virão da API. pegar as props que virão e colocar nas devidas informações */}
//                 <img src={props.restaurant.smallImages[0]} alt="" />
//                 <div className="description">
//                 <h1>{props.restaurant.name}</h1>
//                 <div className="star"><h2>{props.restaurant.typeOfFood}</h2><p>{props.restaurant.priceRank}</p><AiFillStar className="svg"></AiFillStar></div>
                    
                  
                    
//                 </div>
//                 {clicked ? <BsHeartFill onClick={() => {
//                     // console.log('teste')
//                     setClicked(!clicked)
//                 }} className="heart"></BsHeartFill> : <BsHeart onClick={() => {
//                     // console.log('teste coração vazio')
//                     setClicked(!clicked)
//                 }} className="heart"></BsHeart> } 
//                 {/* esses eventos de onclick nao estão funcionando. Parece que o react-icon nao reconhece o click. Resolver isso */}
                
//             </RestaurantStyled>
//         </>
//     )
// }
