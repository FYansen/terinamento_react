import React from 'react'
import { Button, Card } from '@material-ui/core'
import { MdClear } from 'react-icons/md'
import './styles/CartItem.css'

export default function ({name,description,poster_image}) {


    return (
        <Card>
            <div className="itemContainer">
                <img src={`${poster_image}`} alt="imagem" />
                <p>Nome:{name}</p>
                <p>Descrição:{description}</p>
                <div className="removeContainer">
                    <p>Quantidade</p>
                    <Button> <MdClear />Remover</Button>
                </div>
                <p>SubTotal: 100,00 R$</p>
            </div>
        </Card>
    )
}