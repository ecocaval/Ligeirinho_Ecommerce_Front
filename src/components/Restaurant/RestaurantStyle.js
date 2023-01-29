import styled from "styled-components"

export const RestaurantStyled = styled.div`
    
    margin-bottom: 10px;
    position:relative;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 40px;
    padding: 10px;
    width:90%;
    max-width: 450px;
    min-width: 300px;
    margin: 15px auto;
    height: 90px;
    border-bottom: 3px solid #ffaa00;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Barlow Condensed';
    font-weight: 700;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1100px) {
        margin-right: 0;
        margin: 15px auto;
    }

    @media (max-width: 320px) {
        width:50%;
        min-width: 110px;
        flex-direction: column;
        height: 200px;

        main {
            flex-direction: column;
            gap: 10px;
        }
    }

    main {
        display: flex;
        align-items: center;
    }

    &:hover {
        .restaurant-wrapper { 
            transform: translate(20%,0);
            
            @media (max-width: 320px) {
                transform: translate(0,0);
            }
        }
        background-color: #EFEFEF;
        cursor: pointer;

    }

    .divHeart{
        width: 20px;
    }

    .restaurant-wrapper {
        transition: all 0.3s;
    }
    
    .heart{
        color:red;
        margin-right: 30px;
        font-size: 30px;
        z-index: 2;
        transition: all 0.1s ease-in-out;

        @media (max-width: 320px) {
            margin-right: 0;
        }
    }

    .heart-mini{
        color:gray;
        margin-right: 35px;
        font-size: 20px;
        z-index: 2;
        transition: all 0.1s ease-in-out;

        @media (max-width: 320px) {
            margin-right: 0;
        }
    }
    
    .star{
        display: flex;
        align-items: center;
        margin-top: 5px;

        @media (max-width: 320px) {
            justify-content: center;
        }

        p{
            font-size: 11px;
            margin-right: 3px;
            color: #000000;
        }
        .svg{
            height: 21px;
            color: #000000;
        }
    }

    img{
        object-fit: cover;
        height: 70px;
        width: 70px;
        border-radius: 50%;

        @media (max-width: 320px) {
            margin: auto;
            margin-top: 10px;
        }
    }

    .description { 
        margin-left:15%;
        flex-direction: column;
        justify-content: flex-start;
        display: flex;
        align-items: baseline;
        transition: all 0.3s;

        @media (max-width: 320px) {
            margin-left: 0;    
            justify-content: center;
        }

        h1{
            color: #242b36;
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



