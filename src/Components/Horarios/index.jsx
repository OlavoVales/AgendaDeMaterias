import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, TextField, Select, Button } from '@mui/material';
import Selecionar from '../Select';


export default function Horarios() {
  return (
    <Card sx={{ minWidth: 1500, minHeight: 200 }}>
      <CardContent>
        <div className='title'>
        <Typography gutterBottom variant="h5" component="div">
          Cadastro de Horários
        </Typography>
        </div>
        <div className='i-component'>
        <Selecionar/>
        <Selecionar/>
        <Selecionar/>
        <TextField id="standard-basic" label="Selecionar" variant="standard" />
        <Button variant="contained">Cadastrar</Button>
        </div>
        </CardContent>
    </Card>
  );
}