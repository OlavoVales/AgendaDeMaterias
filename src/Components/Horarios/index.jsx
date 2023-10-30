import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, TextField, Select, Button } from '@mui/material';

export default function Horarios() {
  return (
    <Card sx={{ maxWidth: 1500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cadastro de Disciplina
        </Typography>
        <Select/>
        <Select/>
        <Select/>
        <TextField id="standard-basic" label="Selecionar" variant="standard" />
        <Button variant="contained">Cadastrar</Button>
        </CardContent>
    </Card>
  );
}