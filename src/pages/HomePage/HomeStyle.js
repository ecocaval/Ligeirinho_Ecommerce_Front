import styled from "styled-components"

export const Section = styled.div`
    top: 70px;
    position: fixed;
    height: calc(100% - 140px);
    width: 100%;
    z-index: 0;
    padding: 10px;
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