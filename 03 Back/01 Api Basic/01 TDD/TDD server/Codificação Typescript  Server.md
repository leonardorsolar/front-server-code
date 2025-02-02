# Parte 1: Vermelho — Escreva um teste que falhará.

Dentro do vscode, crie o arquivo index.ts

```js
import { Request, Response } from 'express';
import index from './index'; // Importa a aplicação

// Mock dos objetos Request e Response
const mockRequest = () => {
  return {} as Request;
};

const mockResponse = () => {
  const res = {} as Response;
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

describe('Testando rota GET /', () => {
  it('Deve retornar mensagem de boas-vindas com status 200', () => {
    const req = mockRequest();
    const res = mockResponse();

    app.get('/', (req, res)); // Chama a rota diretamente

    expect(res.status).toHaveBeenCalledWith(200); // Verifica se o status 200 foi retornado
    expect(res.send).toHaveBeenCalledWith('Olá, Mundo! Bem-vindo ao Express com TypeScript.');
  });
});

```

Execute os testes, use o comando: npm test

# Parte 2: Verde — Escreva apenas o código suficiente para passar no teste de falha:

Passo 1: Dentro da pasta src, crie o arquivo index.ts, e dentro do arquivo copie e cole o código da classe:

```js
import express, { Request, Response } from "express"
import usuarioRotas from "./rotas/UsuarioRotas"
import cors from "cors" // Importa o CORS

const app = express()
app.use(express.json())

// Configura o CORS
app.use(cors()) // Aplica o CORS para permitir requisições de outros domínios

// Rota GET para visualização
app.get("/", (req: Request, res: Response) => {
    res.send("Olá, Mundo! Bem-vindo ao Express com TypeScript.")
})

app.use("/api", usuarioRotas)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
```

Execute os testes, use o comando: npm test

# Parte 3: Refatorar — Criticar o design e refatorar o código, mantendo os testes intactos

Passo 1: no arquivo index.js, refatore o código da sua maneira
Passo 2: no arquivo de teste, ajuste-o caso necessário
Passo 3: execute o projeto, digitando npm test e veja no terminal
