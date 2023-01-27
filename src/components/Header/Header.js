import { IoReorderThreeOutline } from 'react-icons/io5'
import React from 'react';

import { Cabecalho } from './HeaderStyle';

export default function Header(props) {
    return (
        <Cabecalho>
            <IoReorderThreeOutline
                className="svg"
                onClick={() => props.setClick(!props.click)}
            />
            {/* <img src={'./assets/img/papaleguas.gif'}></img> */}
            <p className='animated-header'>BipBip!</p>
        </Cabecalho>
    )
}
