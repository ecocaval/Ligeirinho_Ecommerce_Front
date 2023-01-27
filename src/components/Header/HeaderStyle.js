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

    .animated-header {
    animation: fade-in 3s ease-in-out forwards;
    opacity: 0; /* começa com opacidade 0 (invisível) */
    }   

    @keyframes fade-in {
    0% {
        opacity: 0; /* começa com opacidade 0 */
    }
    100% {
        opacity: 1; /* termina com opacidade 1 (totalmente visível) */
    }
    }
`

export const Left = styled.div`
    position: fixed;
    left: 15px;
    transition: all 0.2s;

    @media (max-width: 200px) {
        opacity: 0;
    }
`