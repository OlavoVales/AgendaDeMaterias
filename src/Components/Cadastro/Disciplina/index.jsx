import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

export default function Disciplina() {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cadastro de Disciplina
        </Typography>
        <TextField id="standard-basic" label="Disciplina" variant="standard" />
      </CardContent>
      <CardActions>
        <Button variant="contained">Cadastrar</Button>
      </CardActions>
    </Card>
  );
}