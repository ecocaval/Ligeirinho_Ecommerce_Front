import styled from "styled-components"
    

export const Banner = styled.div`
    width: 100%;
    height: 100px;

    img{
        opacity: 1;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
`

export const SectionProduct = styled.div`
    height: 200px;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top:10px;
`

export const Products = styled.div`
    width: 100%;
    height: 170px;
    /* background: aqua; */
    display: flex;
    justify-content: flex-start;
    align-items: end;
    overflow-x:auto;
`

export const Product = styled.div`
    height: 100%;
    min-width: 150px;
    border: 2px black solid;
    /* background-color: red; */
    margin-right: 5px;
    padding: 2px;
`
export const Category = styled.div`
height: 30px;
width: 100%;
display:flex;
justify-content: center;
align-items: center;
font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    background-color: #ff8d00;
`
export const Image = styled.img`
    height: 60%;
    width: 100%;
    object-fit: cover;
`
export const Description = styled.div`
height: 25%;
/* background-color: aliceblue; */
display:flex;
justify-content: center;
align-items: center;
font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
`
export const Price = styled.div`
 height: 15%;
    width: 100%;
    display:flex;
justify-content: center;
align-items: center;
font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
`