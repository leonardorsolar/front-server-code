# Baixando o código com o ambiente já configurado:

git clone: https://github.com/leonardorsolar/server-typescript-form-iff-start.git

certifique que as dependências estão instaladas
Execute o projeto typescript: node src/index.ts

# Parte 1: Selecionado a funcionalidade e crie o teste de aceitação dos cenários de sucesso e de erros:

## Funcionalidade: Registro de Usuário (US001.1)

História de Usuário:
**Como** um usuário,
**quero** me registrar na plataforma
**para** poder acessar minha conta bancária.

# cgatGpt: transforma a história de usuário a seguir em teste de aceitação do tipo dado que(Give), Quando(when),então(then): "cole aqui a História de Usuário"

Cenário: registro bem-sucedido
**Dado que** estou na página de registro de usuário,
**Quando** eu preencho todos os campos obrigatórios com dados válidos (nome, e-mail, senha) e clico no botão "Registrar"
**Então** minha conta deve ser criada com sucesso,
**E** devo receber uma confirmação de que o registro foi realizado.

# Parte 2: Vermelho — Escreva um teste que falhará.

Passo 1: dentro do vscode, crie o arquivo ServicoUsuario.test.ts

```js
import { Usuario } from "../src/modelos/Usuario"

describe("Servico para os usuarios", () => {
    test("Deve criar um usuário e retornar os dados do usuário", () => {
        // Given: O contexto inicial ou configuração necessária para o teste
        // Aqui você deve criar qualquer configuração necessária para o teste.
        const servicoUsuario = new ServicoUsuario()
        const usuario = new Usuario("João", "joao@example.com", "senha123")
        // When: A ação ou evento que ocorre no teste
        // Aqui você deve realizar a ação ou evento que está sendo testado.
        const output = servicoUsuario.criarUsuario(usuario)
        // Then: O resultado esperado ou efeito da ação
        // Aqui você deve verificar se o resultado é o esperado.
        expect(output.getNome()).toBe("João")
    })
})
```

# Parte 3: Verde — Escreva apenas o código suficiente para passar no teste de falha:

Passo 1: Dentro da pasta src, crie o arquivo ServicoUsuario.ts, e dentro do arquivo copie e cole o código da classe:

```js
export class ServicoUsuario {
  private usuarios: Usuario[] = [];

  constructor() {}

  criarUsuario(dado: any): Usuario {
    const usuario = new Usuario(dado.name, dado.email, dado.pasword);
    this.usuarios.push(usuario); // Simula a persistência de usuários
    return usuario;
  }

}
```

Passo 2: Para executar os testes, use o comando: npm test
Passo 3: Crie a importação do arquivo Usuario.test.js:

```js
import { Usuario } from "../src/modelos/Usuario"
import { ServicoUsuario } from "../src/servicos/ServicoUsuario"

describe("Servico para os usuarios", () => {
    test("Deve criar um usuário e retornar os dados do usuário", () => {
        // Given: O contexto inicial ou configuração necessária para o teste
        // Aqui você deve criar qualquer configuração necessária para o teste.
        const servicoUsuario = new ServicoUsuario()
        const usuario = new Usuario("João", "joao@example.com", "senha123")
        // When: A ação ou evento que ocorre no teste
        // Aqui você deve realizar a ação ou evento que está sendo testado.
        const output = servicoUsuario.criarUsuario(usuario)
        // Then: O resultado esperado ou efeito da ação
        // Aqui você deve verificar se o resultado é o esperado.
        expect(output.getNome()).toBe("João")
    })
})
```

Passo 4: Para executar os testes, use o comando: npm test

# Parte 4: Refatorar — Criticar o design e refatorar o código, mantendo os testes intactos

Passo 1: no arquivo ServicoUsuario.js, refatore o código da sua maneira
Passo 2: no arquivo de teste, ajuste-o caso necessário
Passo 3: execute o projeto, digitando npm test e veja no terminal
