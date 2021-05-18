import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from '../screens/Home/Home'
import Cart from '../screens/Cart/Cart'
import { CartContextProvider } from '../context/CartContext'

export default function () {


    return (
        <Router>
            <CartContextProvider>
                <Switch>
                    <Route exact path="/" component={Home} >
                        <Home />
                    </Route>
                    <Route path="/Cart" component={Cart}>
                        <Cart />
                    </Route>
                </Switch>
            </CartContextProvider>
        </Router>
    )
}
