import React, { useContext } from 'react'
import Header from '../../components/Header'
import './Cart.css'
import CartItem from '../../components/CartItem'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'
import CartContext from '../../context/CartContext'


export default function () {

    const { cart } = useContext(CartContext)

    return (
        <>
            <Header />
            <div className="cartBodyContainer">
                <div className="cartHeader">
                </div>
                <div className="cartMainContainer">
                    {cart.map((item) => <CartItem
                        name={item.name}
                        description={item.description}
                        poster_image={item.poster_image} />)}
                    <div className="btnContainer">
                        <Button color="secondary"><MdKeyboardBackspace /><Link to="/">Voltar</Link></Button>
                        <Button variant="contained" color="primary">Finalizar compra</Button>
                    </div>
                </div>
            </div>
        </>
    )
}