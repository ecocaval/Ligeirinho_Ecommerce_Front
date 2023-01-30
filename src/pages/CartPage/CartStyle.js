import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 70px;
margin-bottom: 70px;
padding: 10px;
`

export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button {
    }
`

export const StyleProduct = styled.div`
    margin-bottom: 10px;
    display:flex;
    justify-content: center;
    border-radius: 50px;
    padding: 10px;
    width:100%;
    height: 90px;
    border: 5px solid #ffaa00;
    font-family: 'Raleway';
    font-weight: 700;
    color: #ffae00;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 10%;
        height: 90%;
    }
    h1 {
        display: flex;
        align-items: center;
        font-size: 28px;
    }
    p {
        color: #000000;
    }
`

export const StyleCheckout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 15vh;
    background-color: #ff8d00;
    position: fixed;
    bottom: 100px;
    left: 0;
    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        width: 100vw;
    }
    button {
        width: 90vw;
        border-radius: 5px solid;
        height: 5vh;
    }
`

export const StyleEmptyCart = styled.div`
    display: flex;
    justify-content: center;
`