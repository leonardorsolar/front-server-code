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

Passo 1: dentro do vscode, crie o arquivo Usuario.test.ts, dentro da pasta tests
Passo 2: copie e cole no arquivo Usario.test.ts:
Passo 3: Copie o texto a seguir e cole dentro da função test:

```js
test("Deve registrar um usuário e retornar a mensagem: registrado com sucesso", () => {
    //Given(dado que - preparação - instanciação)
    //Given: O contexto inicial ou configuração necessária para o teste
    //Aqui você deve criar qualquer configuração necessária para o teste.

    //When (quando acontecer algo - ação - método)
    //When: A ação ou evento que ocorre no teste
    //Aqui você deve realizar a ação ou evento que está sendo testado.

    //Then (Então faça isso - afirmação)
    //Then: O resultado esperado ou efeito da ação
    //Aqui você deve verificar se o resultado é o esperado.
    expect().toBe()
})
```

Entenda:

```js
test("Deve registrar um usuário e retornar a mensagem: registrado com sucesso", () => {
    //Give(dado que - preparação - instanciação)
    //Given: O contexto inicial ou configuração necessária para o teste
    //Aqui você deve criar qualquer configuração necessária para o teste.

    //When (quando acontecer algo - ação - método)
    //When: A ação ou evento que ocorre no teste
    //Aqui você deve realizar a ação ou evento que está sendo testado.

    //Then (Então faça isso - afirmação)
    //Then: O resultado esperado ou efeito da ação
    //Aqui você deve verificar se o resultado é o esperado.
    expect().toBe()Passo 2: copie e cole no arquivo Usario.test.ts:
Passo 3: Copie o texto a seguir e cole dentro da função test:
})
```

Passo 5: Abaixo do Given, crie a classe:

```js
test("Deve registrar um usuário e retornar  a mensagem: registrado com sucesso", () => {
    //Given(dado que - preparação - instanciação)
    const usuario = new Usuario()
    //When (quando acontecer algo - ação - método)
    const output = usuario.obterNome()
    //Then (Então faça isso - afirmação)
    expect(output).toBe("solar")
})
```

Passo 6: Para executar os testes, use o comando: npm test
Passo 7: Na aba console, visualize o erro: ReferenceError:

```js
Cannot find name 'Usuario'. Did you mean 'usuario'?ts(2552)
Usuario.test.ts(3, 11): 'usuario' is declared here.
```

# Parte 3: Verde — Escreva apenas o código suficiente para passar no teste de falha:

Passo 1: Dentro da pasta src, crie o arquivo Usuario.ts, e dentro do arquivo copie e cole o código da classe:

```js
export class Usuario {
    obterNome() {
        return "solar"
    }
}
```

Passo 2: Para executar os testes, use o comando: npm test
Passo 3: Crie a importação do arquivo Usuario.test.js, digite no início: import { Usuario } from "../src/Usuario"

```js
import { Usuario } from "../src/Usuario"

test("Deve registrar um usuário e retornar registrado com sucesso", () => {
    //Give(dado que - preparação - instanciação)
    const usuario = new Usuario()
    //When (quando acontecer algo - ação - método)
    const output = usuario.obterNome()
    //then (Então faça isso - afirmação)
    expect(output).toBe("solar")
})
```

Passo 4: Para executar os testes, use o comando: npm test

# Parte 4: Refatorar — Criticar o design e refatorar o código, mantendo os testes intactos

Passo 1: no arquivo Usuario.js, refatore o código da sua maneira
Passo 2: no arquivo de teste, ajuste-o caso necessário
Passo 3: execute o projeto, digitando npm test e veja no terminal
