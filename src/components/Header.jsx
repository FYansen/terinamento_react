import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingCart, MdHome, MdSearch } from 'react-icons/md'

import './styles/HeaderStyles.css'
import CartContext from '../context/CartContext'

export default function ({ hasInput, onTextChange }) {

    const [serchText, setSearchText] = useState("");

    const onChangeInput = (event) => {
        setSearchText(event.target.value)
        onTextChange(event.target.value)
    }

    return (
        <div className='headerContainer'>
            <img src="/logo.png" />
            <div className="navMenuContainer">
                {hasInput
                    && <>
                        <MdSearch />
                        <input
                            type="text"
                            placeholder="Procurar"
                            value={serchText}
                            onChange={(event) => { onChangeInput(event) }}
                            style={{ padding: 5, borderRadius: 5, width: 300 }} />
                    </>
                }
                <ul>
                    <li><Link to="/"><MdHome />Home</Link></li>
                    <li>Categorias</li>
                    <li>Login</li>
                    <li><Link to="/Cart"><MdShoppingCart /></Link></li>
                </ul>
            </div>

        </div>
    )
}