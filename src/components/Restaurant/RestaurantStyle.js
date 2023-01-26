import styled from "styled-components"

// asa
export const RestaurantStyled = styled.div`

    margin-bottom: 10px;
    position:relative;
    display:flex;
    border-radius: 50px;
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



