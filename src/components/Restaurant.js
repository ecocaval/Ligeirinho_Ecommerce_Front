import axios from "axios"
import styled from "styled-components"



export default function Restaurant(props){
    return(
        <>
        <RestaurantStyled onClick={() => {
            
        }}>
            {/* Todos estes dados abaixo virão da API. pegar as props que virão e colocar nas devidas informações */}
            <img src="./assets/img/carterita.png"></img>
            <div className="description">
                <h1>Restaurante A</h1>
                <h2>Comida Brasileira - 50-60 min</h2>
            </div>
        </RestaurantStyled>
        
     </>
    )
}
// asa
const RestaurantStyled = styled.div`
    margin-bottom: 10px;
    position:relative;
    display:flex;
    border-radius: 50px;
    box-sizing: border-box;
    padding: 10px;
    width:100%;
    height: 90px;
    border: 5px solid #ffaa00;
    text-align: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    color: #ffae00;;
    img{
        height: 100%;
    }
    .description { 
        flex-direction: column;
        justify-content: flex-start;
        display: flex;
        height: 100%;
        position: absolute;
        right: 11%;
        top: 25px;
        align-items: baseline;
        h1{
            font-size: 25px;
        }
        h2{
            color:#2d282863;
            font-size: 15px;
        }
    }

`



