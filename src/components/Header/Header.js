import { IoReorderThreeOutline } from 'react-icons/io5'
import React from 'react';

import { Cabecalho, SideWrapper } from './HeaderStyle';

export default function Header(props) {
    return (
        <Cabecalho>
            <SideWrapper>
                <IoReorderThreeOutline
                    className="svg"
                    onClick={() => props.setClick(!props.click)}
                />
            </SideWrapper>
            <p>BipBip!</p>
        </Cabecalho>
    )
}

