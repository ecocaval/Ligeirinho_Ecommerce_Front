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
    color: #ffae00;
    .heart{
        color:red;
        position: absolute;
        right: 30px;
        top:25%;
        font-size: 30px;
        pointer-events: none;
    }
    .star{
        display: flex;
        margin-top: 5px;
        p{
            font-size: 11px;
            color: #000000;
        }
        .svg{
            height: 21px;
            color: #000000;
    }
}
    img{
        object-fit: cover;
        height: 100%;
        width: 20%;
        border-radius: 50% 0 0 50%;
    }

    .description { 
        /* width: 80%; */
        margin-left:10%;
        flex-direction: column;
        justify-content: flex-start;
        display: flex;
        align-items: baseline;
        h1{
            /* overflow-x: auto; */
            /* max-width: 70%; */
            font-size: 18px;
            
        }
        h2{
            display: flex;
            color:#2d282863;
            font-size: 13px;
            margin-right: 5px;
            align-items: center;
        }
    }
`



