import styled from "styled-components"

export const HomePageWrapper = styled.div`
    font-family: 'Barlow Condensed';
`

export const HomeSection = styled.div`
    top:105px;
    position: fixed;
    height: calc(100% - 175px);
    display: flex;
    width: 100%;
    z-index: 0;
    overflow-y:auto;
    a{
        text-decoration: none;
    }
`

export const Section = styled.div`
    top:105px;
    position: fixed;
    height: calc(100% - 175px);
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 0;
    overflow-y:auto;
    a{
        text-decoration: none;
    }
`

export const HomeNavBar = styled.nav`

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top:70px;
    height: 35px;
    width: 100%;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.5);

    h3  {
        font-weight: 600;
        margin-right: 10px;
        text-align: center;
        
    }
    .svg{   
        color:black;
    }
    .star{
        display:flex;
    }
    .heart{
        position:absolute;
        right: 0;
        margin-right: 10px;
    }


    .animated-text {
    animation: animation-title 3s ease-in-out forwards;
    position: absolute;
    left: -100%;
    opacity: 0;
    }

    @keyframes animation-title {
    0% {
        left: -100%;
        opacity: 0;
    }
    100% {
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
    }
    }
`

export const NavBar = styled.nav`

    overflow: hidden;
    display: flex;
    align-items: center;
    position: absolute;
    top:70px;
    height: 35px;
    width: 100%;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.5);

    h3  {
        font-weight: 600;
        margin-right: 10px;
        text-align: center;
        
    }
    .svg{   
        color:black;
    }
    .star{
        display:flex;
    }
    .heart{
        position:absolute;
        right: 0;
        margin-right: 10px;
    }


    .animated-text {
    animation: animation-title 3s ease-in-out forwards;
    position: absolute;
    left: -100%;
    opacity: 0;
    }

    @keyframes animation-title {
    0% {
        left: -100%;
        opacity: 0;
    }
    100% {
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
    }
    }
`

export const OddNavText = styled.p`
    font-size: 20px;
    text-align: center;
    z-index: 2;

    /* background-color: red; */
    `

export const EvenNavText = styled.p`
    color: #ff8d00;
    font-size: 20px;
    text-align: center;
    z-index: 2;
    transition: all 0.2s;
    
    @media (max-width: 400px) {
        opacity: 0;
        position: absolute;
    }
`

export const BackgroundNavWrapper = styled.div`
    position: relative;
`

export const BackgroundNav = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 2px solid red;
    /* width: 100%; */
    height: 100%;
    background-color: #ff8d00;
    z-index: 0;
`

export const SideBar = styled.div`
    display: ${props => props.click ? 'block' : "none"};
    width:50%;
    height:100%;
    position:absolute;
    top:0px;
    left:0;
    background:white;
    z-index:2;
    border-style: solid;
    border-color: #ff8d00;
    border-width: 6px;   
`

export const OutSideBar = styled.div`
    display: ${props => props.click ? 'block' : "none"};
    width:50%;
    height:100%;
    position:absolute;
    top:0px;
    right:0px;
    background:black;
    z-index:2;
    opacity: 50%;   
`

export const StyledTitleRestaurants = styled.h1`
    margin: 20px auto;
    font-family: 'Playball';
    font-size: 40px;
    text-align: center;
    color: #000000;
`

export const StyledTitleProducts = styled.h1`
    margin: 20px auto;
    font-family: 'Playball';
    font-size: 40px;
    text-align: center;
    color: #FFFFFF;
`

export const LeftSection = styled.div`
    width: 40%;
    /* border: 10px solid red; */
    overflow-y: auto; 
    /* background-color: red; */

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 5px; 
        border-radius: 5px;
        background: #deaa10;  
    }
    ::-webkit-scrollbar-thumb:window-inactive {
        background: #ede5cc; 
    }    

    @media (max-width: 910px) {
        width: 100%;
    }

`

export const RightSection = styled.div`
    width: 60%;
    height: 100%;
    overflow-y: auto; 

    background-color: #2e2d2a;

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 5px; 
        border-radius: 5px;
        background: #deaa10;  
    }
    ::-webkit-scrollbar-thumb:window-inactive {
        background: #ede5cc; 
    }    

    @media (max-width: 910px) {
        display: none;
    }
`

export const ProductsWrapper = styled.div`
    display: flex;  
    flex-wrap: wrap;
    gap: 10px;
    padding: 0 30px;
    overflow-y: auto; 
`

export const ProductsTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    transition: all 0.3s;
    padding: 5px;
    
    &:hover {
        cursor: pointer;
        background-color: #F1F1F1;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8);
    }
    
    @media (max-width: 390px) {
        opacity: 0;
        padding: 0;

        &:hover {
            cursor: auto;
        }
    }

    @media (min-width: 910px) and (max-width: 1000px) {
        right: 5px;
    }
`

export const FilterModal = styled.div`
    width: 350px;
    padding: 20px 10px;
    border-radius: 30px;
    margin: auto;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    position: relative;
    animation: popup 0.2s ease-in-out ; 

    @media (max-width:440px) {
        width: 85%;
        min-width: 290px;
    }

    @media (max-width:300px) {
        width: 90%;
        min-width: 0;
    }

    @keyframes popup {
        from {
            scale: 0;
        } to {
            scale: 1;
        }
    }

    > p {
        margin: 10px auto;
        font-size: 20px;
    }
`

export const BlackPage = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    z-index: 5;
`

export const ModalDivisionLine = styled.div`
    width: 70%;
    margin: 0 auto;
    margin-bottom: 5px;
    border: 1px solid lightgray;
`

export const FilterDivision = styled.div`
    display: flex;
    align-items: center;
    margin: 20px auto;
    margin-left: 5%;

    p {
        font-size: 20px;
        margin: 0 10px;

        @media (max-width:300px) {
            max-width: 70px;
            min-width: 0;
        }
    }
`

export const SelectButton = styled.div`
    border: 1px solid gray;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 40px;
    transition: all 0.2s;
    opacity: 0.5;
    background-color: lightgray;
    
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        background-color: gray;
        opacity: 1;
    }
`   