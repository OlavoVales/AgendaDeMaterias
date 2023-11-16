"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa a função express
const express_1 = __importDefault(require("express"));
// Importa a função CORS
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./routers"));
// Porta do servidor
const port = 3000;
// Objeto da aplicação
const app = (0, express_1.default)();
// Ativa o CORS
app.use((0, cors_1.default)());
// Ativa o express?
app.use(express_1.default.json());
app.use("/paises", routers_1.default.paisesRouter);
app.listen(port, () => {
    console.log(`Servidor sendo executado na porta ${port}`);
});
