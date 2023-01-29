import styled from "styled-components"

export const ProductStyled = styled.div`
    font-family: 'Barlow Condensed';
    overflow: hidden;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
    padding: 10px;
    width:200px;
    max-width: 450px;
    min-width: 200px;
    margin: 15px auto;
    height: 200px;
    background-color: #FFFFFF;
    border: 3px solid #ffaa00;
    font-weight: 700; 
`

export const ProductImage = styled.figure`

    background-color: lightgray;
    margin-top: -10px;
    width: 120%;
    padding: 10px 0;
    display: flex;
    justify-content: center;

    img {
        width: 100px;
        height: 90px;
    }
    
`

export const ProductInfo = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
        font-size: 25px;
        margin: 13px auto;
    }

    p {
        font-size: 20px;
        color: brown;
    }
`


