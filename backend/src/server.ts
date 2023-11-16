import express, { Request, Response } from "express";
import cors from "cors";
import horariosRouter from "./routers/horarios-router";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/horarios", horariosRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({
        message: 'Rota não encontrada.'
    });
});

app.listen(port, () => {
    console.log(`Servidor sendo executado na porta ${port}`);
});

// a principio está certo