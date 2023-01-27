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
    justify-content: space-between;
    align-items:center;

    .svg    {
        color:white;
        font-size:30px;
    }
    
    p   {
        position:absolute;
        left:40%;
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img {
        width: 120px;
    }

    .animated-header {
  animation: fade-in 5s ease-in-out forwards;
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