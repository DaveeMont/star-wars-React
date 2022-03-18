import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Characters({nombre, height, mass, birth_year, imagen}) {
    console.log("imagen",imagen);
    return (
        <Card sx={{ maxWidth: 345 }}>
          {
            imagen && (
              <CardMedia
                component="img"
                height="400"
                
                src={imagen}
              />

            )
          }
          
          <CardContent
           style={{
            // border: "0px 75px",
            padding: 40,
            textAlign: "center",
            background: "black",
            color: "yellow"
            
          }}>  
            <Typography gutterBottom variant="h5" component="div">
              Nombre:  {`${nombre}`}
            </Typography>
            <Typography variant="h5" color="yellow">
              Altura: {`${height}`}
            </Typography>
            <Typography variant="h5" color="yellow">
              Peso: {`${mass}`}
            </Typography>
            <Typography variant="h5" color="yellow">
              Cumpleaños: {`${birth_year}`}
            </Typography>

          </CardContent>
          <CardActions>
          <form onsubmit="console.log('hola mundo.'); return false">
            <Button size="small"
              color="secondary"
              variant='contained'
              href='Favoritos'>
              Agregar a favoritos
            </Button>
            </form>
          </CardActions>
        </Card>
      );
      
}
