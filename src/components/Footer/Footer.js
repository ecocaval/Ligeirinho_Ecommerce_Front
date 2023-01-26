import { AiTwotoneHome } from 'react-icons/ai'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { BsBasket } from 'react-icons/bs'
import { BsPerson } from 'react-icons/bs'

import { Rodape } from './FooterStyle'

export default function Footer(props) {
    return (
        <Rodape>
            <AiTwotoneHome className="svg" />
            <HiMagnifyingGlass className="svg" />
            <BsBasket className="svg" />
            <BsPerson className="svg" />
            <img
                className="papaleguas"
                onClick={() => {
                    const audio = new Audio('./assets/audios/papaleguas.mp3')
                    audio.play();
                }}
                src={'./assets/img/papaleguas.gif'}
                alt=""
            />
        </Rodape>
    )
}