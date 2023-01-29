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
    border: 0px black solid;
    /* background-color: red; */
    margin-right: 5px;
    padding: 2px;
    border-right: 1px solid #00000059;
`
export const Category = styled.div`
 animation: color-change 4s infinite;
 @keyframes color-change {
  0% {
    background-color: #ff8d00;
  }
  25% {
    background-color: gray;
  }
  50% {
    background-color:#ff8d00;
  }
  75% {
    background-color: gray;
  }
  100% {
    background-color: #ff8d00;
  }
}
height: 30px;
width: 100%;
display:flex;
justify-content: center;
align-items: center;
font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 600;
    background-color: #aca69e;
    color:white;
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
font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 600;
    animation: typing 1s steps(40, end);
    @keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
span{
    animation-delay: 1s;
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
}
`



export const Price = styled.div`
 height: 15%;
    width: 100%;
    display:flex;
justify-content: center;
font-family: 'Barlow Condensed';
align-items: center;
    font-style: normal;
    font-weight: 600;
`