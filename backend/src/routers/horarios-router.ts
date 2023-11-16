import express from 'express';
import { cadastrarProfessor, cadastrarDisciplina, cadastrarTurma, cadastrarHorarios } from '../controllers/horarios-controller';

const horariosRouter = express.Router();

horariosRouter.post('/', cadastrarProfessor);

horariosRouter.post('/', cadastrarDisciplina);

horariosRouter.post('/', cadastrarTurma);

horariosRouter.post('/', cadastrarHorarios);

export default horariosRouter;

// a principio está certo