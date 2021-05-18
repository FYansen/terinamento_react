import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CartContext from '../context/CartContext'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "1rem"
    },
    media: {
        height: 140,
    },
});

export default function ({ name, description, poster_image }) {
    const classes = useStyles();
    const { addProductCart, cart } = useContext(CartContext)

    console.log(cart)

    function onClickBuy(object) {

        console.log(object)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${poster_image}`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Valor: 250R$
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => addProductCart({name,description,poster_image})} size="small" color="primary">
                    Comprar
                </Button>
                <Button size="small" color="primary">
                    Ver Mais
          </Button>
            </CardActions>
        </Card>
    )
}