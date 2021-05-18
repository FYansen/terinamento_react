import React, { useEffect, useState } from 'react'

import './Home.css'
import Card from '../../components/Card'
import Header from '../../components/Header'

import { Button } from '@material-ui/core'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import api from '../../api/api'

export default function () {
    const [data, setData] = useState([]);
    const [inputText, setInputText] = useState("")

    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLoadPage = async () => {
        const res = await api.get("/movies");
        setData([...res.data])
    }

    const onTextChange = (text) => {
        setInputText(text)
    }

    //Constante que renderiza os cards com os filmes

    const filter =
        <> {
            inputText.length > 1 ?
                data.map((item, key) => {
                    if (item.name.toLowerCase().includes(inputText.toLowerCase())) {
                        return (<Card
                            name={item.name}
                            description={item.description}
                            poster_image={item.poster_image}
                            key={key}
                        />)
                    } else {
                        return null
                    }
                })
                :
                data.map((item, key) => {
                    return (
                        <Card
                            name={item.name}
                            description={item.description}
                            poster_image={item.poster_image}
                            key={key}
                        />
                    )
                })
        }
        </>



    useEffect(() => {
        onLoadPage()
    }, [])



    return (
        <>
            <div className='bodyContainer'>
                <div className="homeHeader">
                    <Header hasInput={true} onTextChange={onTextChange} />
                </div>
                <div className="afterHeader">
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Filtro
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Menor Preço</MenuItem>
                        <MenuItem onClick={handleClose}>Maior Preço</MenuItem>
                        <MenuItem onClick={handleClose}>Popularidade</MenuItem>
                    </Menu>
                </div>
                <div className="asideContainer">
                    <p>Categorias</p>
                    <div className="buttonsContainer">
                        <Button variant="contained" color="default">Aventura</Button>
                        <Button variant="contained" color="default">Rpg</Button>
                        <Button variant="contained" color="default">Esporte</Button>
                    </div>
                </div>
                <div className="mainContainer">
                    {filter}
                </div>
                <div className='footerContainer'>
                </div>
            </div>
        </>
    )
}