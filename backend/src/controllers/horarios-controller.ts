import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import Horarios from "../models/horarios"

export const cadastrarProfessor = async (req: Request, res: Response) => {
    const record = req.body;
    try {

        res.status(200).json({
            const horarios = new Horarios(record.professor);
        })
    }
    catch (err) {
        res.status(404).json({
            message: (err as Error).message
        })
    }
};

export const cadastrarDisciplina = async (req: Request, res: Response) => {
    const record = req.body;
    try {

        res.status(200).json({
            const horarios = new Horarios(record.disciplina);
        })
    }
    catch (err) {
        res.status(404).json({
            message: (err as Error).message
        })
    }
};

export const cadastrarTurma = async (req: Request, res: Response) => {
    const record = req.body;
    try {

        res.status(200).json({
            const horarios = new Horarios(record.turma);
        })
    }
    catch (err) {
        res.status(404).json({
            message: (err as Error).message
        })
    }
};

export const cadastrarHorarios = async (req: Request, res: Response) => {
    const record = req.body;
    try {
            // É PROVAVELMENTE DIFERENTE DOS ACIMA
    }
    catch (err) {
        res.status(404).json({
            message: (err as Error).message
        })
    }
};