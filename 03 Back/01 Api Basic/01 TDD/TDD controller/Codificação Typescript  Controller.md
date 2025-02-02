# Parte 1: Vermelho — Escreva um teste que falhará.

Dentro do vscode, crie o arquivo ControladorUsuario.test.ts

```js
// tests/controladora/ControladorUsuario.test.ts
import request from "supertest"
import express from "express"
import { ServicoUsuario } from "../src/servicos/ServicoUsuario"
import { ControladorUsuario } from "../src/controladora/ControladorUsuario"

describe("ControladorUsuario", () => {
    let app: express.Express
    let servicoUsuario: ServicoUsuario

    beforeEach(() => {
        app = express()
        app.use(express.json())

        servicoUsuario = new ServicoUsuario()
        const controlador = new ControladorUsuario(servicoUsuario)
        app.post("/usuarios", (req, res) => controlador.criarUsuario(req, res))
    })

    it("deve criar um usuário e retornar os dados do usuário", async () => {
        const response = await request(app).post("/usuarios").send({
            nome: "João",
            email: "joao@example.com",
            senha: "senha123",
        })

        expect(response.status).toBe(201)
        expect(response.body).toEqual({
            nome: "João",
            email: "joao@example.com",
            senha: "senha123",
        })
    })
})
```

Execute os testes, use o comando: npm test

# Parte 2: Verde — Escreva apenas o código suficiente para passar no teste de falha:

Passo 1: Dentro da pasta src, crie o arquivo ServicoUsuario.ts, e dentro do arquivo copie e cole o código da classe:

```js
import { Request, Response } from 'express';
import { ServicoUsuario } from '../servicos/ServicoUsuario';

export class ControladorUsuario {
  private servicoUsuario: ServicoUsuario;

  constructor(servicoUsuario: ServicoUsuario) {
    this.servicoUsuario = servicoUsuario;
  }

  public async criarUsuario(req: Request, res: Response): Promise<void> {
    console.log('ControladorUsuario');
    console.log(req.body);
    try {
      const usuario = await this.servicoUsuario.criarUsuario(req.body);
      res.status(201).json(usuario);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

```

Execute os testes, use o comando: npm test

# Parte 3: Refatorar — Criticar o design e refatorar o código, mantendo os testes intactos

Passo 1: no arquivo ControladorUsuario.js, refatore o código da sua maneira
Passo 2: no arquivo de teste, ajuste-o caso necessário
Passo 3: execute o projeto, digitando npm test e veja no terminal
