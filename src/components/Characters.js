import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function Characters({nombre, height, mass, birth_year}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://mascotas-static.hola.com/elminizoo/files/2013/04/iguana.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            nombre:  {`${nombre}`}
            </Typography>
            <Typography variant="h5" color="text.secondary">
            Altura: {`${height}`}
            </Typography>
            <Typography variant="h5" color="text.secondary">
             Peso: {`${mass}`}
            </Typography>
            <Typography variant="h5" color="text.secondary">
             Cumpleaños: {`${birth_year}`}
            </Typography>

          </CardContent>
          <CardActions>
            <Button size="small">Agregar a favoritos</Button>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      );
      
}
