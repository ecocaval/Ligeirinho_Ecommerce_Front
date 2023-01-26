// import axios from "axios"
import { RestaurantStyled } from "./RestaurantStyle"

export default function Restaurant(props) {
    return (
        <>
            <RestaurantStyled>
                {/* Todos estes dados abaixo virão da API. pegar as props que virão e colocar nas devidas informações */}
                <img src="./assets/img/carterita.png" alt=""/>
                <div className="description">
                    <h1>Restaurante A</h1>
                    <h2>Comida Brasileira - 50-60 min</h2>
                </div>
            </RestaurantStyled>
        </>
    )
}
