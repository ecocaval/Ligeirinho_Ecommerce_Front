import styled from "styled-components"

export const Cabecalho = styled.div`

    z-index:1;
    padding: 0px 10px;
    width: 100%;
    height: 70px;
    position:fixed;
    left: 0px;
    top: 0px;
    background: #ff8d00;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display:flex;
    justify-content: center;
    align-items:center;

    .svg    {
        color:white;
        font-size:30px;
    }
    
    p   {
        font-family: 'Dosis';
        font-size: 38px;
        color: #FFFFFF;
        margin-bottom: 10px;
    }

    img {
        width: 120px;
    }
`

export const SideWrapper = styled.div`
    position: fixed ;
    left: 5%;
`