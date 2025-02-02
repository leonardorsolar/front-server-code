# Baixando o código com o ambiente já configurado:

git clone: https://github.com/leonardorsolar/server-java-form-iff-start.git

Acesse: src/main/java/com/example/server_java_form_iff_start/ServerJavaFormIffStartApplication.java
Execute o run do arquivo java

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

Passo 1: dentro do vscode, crie o arquivo UsarioTeste.java, dentro da pasta src/test/java/com/example/server_java_form_iff_start
Passo 2: copie e cole no arquivo UsarioTeste.java:
Passo 3: Copie o texto a seguir e cole dentro da classe test:

```java
public class Usariotest {
    @Test
    void testeRegistrarUsuario() {
        //Given(dado que - preparação - instanciação)
        // Dado que temos um novo usuário com dados específicos

       //When (quando acontecer algo - ação - método)
        // Quando acessamos os dados do usuário usando os métodos getters

       //Then (Então faça isso - afirmação)
        // Então os dados devem ser os mesmos que os fornecidos ao criar o usuário
        assertEquals();
    }

}
```

Entenda:

```java
 void testeRegistrarUsuario() {
    //Give(dado que - preparação - instanciação)
    //Given: O contexto inicial ou configuração necessária para o teste
    //Aqui você deve criar qualquer configuração necessária para o teste.

    //When (quando acontecer algo - ação - método)
    //When: A ação ou evento que ocorre no teste
    //Aqui você deve realizar a ação ou evento que está sendo testado.

    //Then (Então faça isso - afirmação)
    //Then: O resultado esperado ou efeito da ação
    //Aqui você deve verificar se o resultado é o esperado.
        assertEquals();
    }
```

Passo 5: Abaixo do Given, o crie a classe:

```js
public class Usuariotest {
    @Test
    void testeRegistrarUsuario() {
        // Given (Dado que)
        // Dado que temos um novo usuário com dados específicos
        Usuario usuario = new Usuario();
        // When (Quando)
        // Quando acessamos os dados do usuário usando os métodos getters
        String nome = usuario.obterNome();
        // Then (Então)
        // Então os dados devem ser os mesmos que os fornecidos ao criar o usuário
        assertEquals("solar", nome);
    }

}
```

Passo 6: Execute o teste do método
Passo 7: Na aba console, visualize o erro: ReferenceError:

```java
java.lang.Error: Unresolved compilation problems:
 Usuario cannot be resolved to a type
 The method obterNome() is undefined for the type String
 Syntax error, insert ";" to complete Statement
```

# Parte 3: Verde — Escreva apenas o código suficiente para passar no teste de falha:

Passo 1: Dentro da pasta src/main/java/com/example/server_java_form_iff_start, crie o arquivo Usuario.java, e dentro do aruivo copie e cole o código da classe:

```js
package com.example.server_java_form_iff_start;

public class Usuario {

    String obterNome() {
        return "solar";
    }

}
```

Passo 2: Execute o teste do método

# Parte 4: Refatorar — Criticar o design e refatorar o código, mantendo os testes intactos

Passo 1: no arquivo Usuario.js, refatore o código da sua maneira
Passo 2: no arquivo de teste, ajuste-o caso necessário
Passo 3: execute o projeto.
