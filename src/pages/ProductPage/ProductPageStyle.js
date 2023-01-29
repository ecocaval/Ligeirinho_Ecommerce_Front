import styled from "styled-components"

export const ProductPageStyle = styled.main`
    font-family: 'Barlow Condensed';
`
export const PageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`
export const StyledMain = styled.main`
    margin: auto;
    position: fixed;
    width: 100%;
    height: calc(100% - 140px);
    z-index: 1;
    padding-bottom: 30px;
    overflow-y: auto;
`

export const ProductFlex = styled.div`
    position: relative;
    display: flex;
    max-width: 600px;
    height: 50px;
    margin: 30px auto;
`

export const ProductTitle = styled.div`
    font-size: 35px;
    text-align: center;
    min-width: 135px;
    max-width: 160px;
    word-wrap: break-word;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s;

    @media (max-width: 450px) {
        transform: translate(-90%, -50%);
    }

    @media (max-width: 320px) {
        transform: translate(-50%, -50%);
    }
`

export const RestaurantInfo = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
    opacity: 1;

    @media (max-width: 320px) {
        opacity: 0;
    }

    img {
        width: 30px;
        border-radius: 30px;
        z-index: 2;
    }

    p {
        margin-left: -10px;
        background-color: lightgray;
        padding: 5px 7px 5px 15px;
        border-radius: 0px 10px 10px 0px;
    }
`

export const ProductImages = styled.figure`
    max-width: 600px;
    margin: 10px auto;
    overflow: hidden;
    border: 2px solid #ff8d00;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);  

    @media (max-width: 620px) {
        margin: 10px 20px;
    }

    img {
        max-width: 400px;
        height: 230px;
    }
`

export const ProductDescription = styled.p`
    font-family: 'Barlow Condensed';
    font-size: 20px;
    max-width: 600px;
    margin: 20px auto;
    text-align: center;
    padding: 0px 20px;
    text-overflow: ellipsis;
`

export const DivisionLine = styled.section`
    border: 1px solid #ff8d00;
    margin: 20px auto;
`

export const BuyWrapper = styled.section`
    border: 2px solid #ff8d00;
    border-radius: 20px;
    width: 50%;
    max-width: 250px;
    margin: 30px auto 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 450px) { 
        flex-direction: column;
        min-width: 120px;
        /* height: 100px; */
    }
`

export const BackgroundPrice = styled.div`
    width: fit-content;
    padding: 0px 10px;
    border-radius: 20px 0px 0px 20px;
    height: 40px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5;

    @media (max-width: 450px) { 
        width: 100%;
        border-radius: 20px 20px 0px 0px;
    }
`

export const ProductPrice = styled.p`
    text-align: center;
    font-size: 20px;
`

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15%;
    transition: all 0.3s;

    @media (max-width: 450px) { 
        margin: 20px 0;
    }
`

export const AddButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #18a33d;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-right: -5px;
    z-index: 2;
    transition: all 0.2s linear;

    &:hover {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8); 
        cursor: pointer; 
    }
`

export const QuantityTextContainer = styled.div`
    width: 40px;
    height: 25px;
    border: 1.5px solid lightgray;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const QuantityText = styled.p`
    font-size: 19px;
`

export const SubtractButton = styled.button`
    text-align: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #a3183b;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-left: -5px;
    z-index: 2;

    &:hover {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8); 
        cursor: pointer; 
    }
`

export const DescriptionWrapper = styled.section`
    display: flex;
    flex-direction: column;
`

export const DescriptionTitle = styled.div`
    margin: 20px auto;
    font-size: 22px;
    color: gray;
    text-align: center;
    display: flex;
    align-items: center;
    transition: all 0.5s;

    @media (max-width: 345px) {
        flex-direction: column;
        gap: 15px;
        max-width: 180px;
    }

    p {
        margin-right: 10px;

        @media (max-width: 320px) {
            margin-right: 0;
        }
    }
`

//* Estilo do Icon ao lado da descrição quando ativo
export const checkerStyle = {
    transition: "all 0.2s",
    boxShadow: "0px 0px 15px 0px #9aeb98",
    borderRadius: "12px",

    ":hover": {
        cursor: "pointer"
    }
}

//* Estilo do Icon ao lado da descrição quando ativo
export const checkerStyle2 = {
    transition: "all 0.2s",
    boxShadow: "0px 0px 15px 0px #e0805a",
    borderRadius: "12px",
    marginLeft: "5px",

    ":hover": {
        cursor: "pointer"
    }
}

export const DescriptionTextArea = styled.textarea`
    font-family: 'Barlow Condensed';
    resize: none;
    overflow: hidden;
    white-space: pre-wrap; 
    font-size: 20px;
    padding: 15px;
    width: 50%;
    min-width: 250px;
    max-width: 600px;
    height: ${props => props.userWantsDescription ? "130px" : "0"};
    margin: auto;
    transition: all 0.2s ease-out ;
    border: ${props => props.userWantsDescription ? "1px lightgray solid;" : "none"};
    box-shadow: ${props => props.userWantsDescription ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "none"};
    background-color: #ffffff;
    transition: all 0.3s;

    @media (max-width: 270px) {
        min-width: 80%;
    }
`

export const SendButtonContainer = styled.button`
    font-family: 'Barlow Condensed';
    padding: 10px;
    font-size: 20px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 120px;
    height: 50px;
    border-radius: 20px;
    border: none;
    transform: ${props => props.userWantsDescription ? "translate(0%, 50%)" : "translate(0%, -50%)"};
    background-color: #ff8d00;
    transition: all 0.3s;
    margin-bottom: 10px;
    transition: all 0.3s;

    &:hover {
        border-radius: 5px;
        background-color: #805204;
        width: 150px;
        cursor: pointer;
    }
`
