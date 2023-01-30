import { IoReorderThreeOutline } from 'react-icons/io5'
import React from 'react';

import { Cabecalho, Left } from './HeaderStyle';

export default function Header(props) {
    return (
        <Cabecalho>
            <Left>
                <IoReorderThreeOutline
                    className="svg"
                    onClick={() => props.setClick(!props.click)}
                />
            </Left>
            {/* <img src={'./assets/img/papaleguas.gif'}></img> */}
            <p >Ligeirinho</p>
        </Cabecalho>
    )
}
