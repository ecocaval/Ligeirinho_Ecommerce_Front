import styled from "styled-components"

export default function TransparentBackground() {

    const imageAdress = "https://suaviagemonline.com.br/wp-content/uploads/2020/09/Bangladesh.jpg"

    return (
        <TranparentBackground>
            <img src={imageAdress} alt="" />
        </TranparentBackground>
    )
}

const TranparentBackground = styled.div`
    position: fixed;
    width: 100vw;
    opacity: 0.15;
`
