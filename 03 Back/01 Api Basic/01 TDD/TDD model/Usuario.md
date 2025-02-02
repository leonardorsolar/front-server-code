# TDD em typeScript

```js
import { Usuario } from "../src/modelos/Usuario"

describe("Classe desejada", () => {
    test("Deve ...", () => {
        // Given: O contexto inicial ou configuração necessária para o teste
        // Aqui você deve criar qualquer configuração necessária para o teste.

        // When: A ação ou evento que ocorre no teste
        // Aqui você deve realizar a ação ou evento que está sendo testado.

        // Then: O resultado esperado ou efeito da ação
        // Aqui você deve verificar se o resultado é o esperado.
        expect().toBe()
    })
})
```

# TDD em java

```java
public class UsuarioTeste {
    @Test
    void testCriarUsuario() {
        // Given (Dado que)
        // Dado que temos um novo usuário com dados específicos

        // When (Quando)
        // Quando acessamos os dados do usuário usando os métodos getters

        // Then (Então)
        // Então os dados devem ser os mesmos que os fornecidos ao criar o usuário
        assertEquals( , );

    }
}
```

# finalizada:

# TDD em java

```js
import { Usuario } from "../src/modelos/Usuario"

describe("Classe desejada", () => {
    test("Deve ...", () => {
        // Given: O contexto inicial ou configuração necessária para o teste
        // Aqui você deve criar qualquer configuração necessária para o teste.
        const usuario = new Usuario("João", "joao@example.com", "senha123")

        // When: A ação ou evento que ocorre no teste
        // Aqui você deve realizar a ação ou evento que está sendo testado.
        const nome = usuario.getNome()
        // Then: O resultado esperado ou efeito da ação
        // Aqui você deve verificar se o resultado é o esperado.
        expect(nome).toBe("João")
    })
})
```

# TDD em java

```java
public class UsuarioTeste {
    @Test
    void testCriarUsuario() {
        // Given (Dado que)
        // Dado que temos um novo usuário com dados específicos
        Usuario usuario = new Usuario("John Doe", "john.doe@example.com", "password123");

        // When (Quando)
        // Quando acessamos os dados do usuário usando os métodos getters
        String nome = usuario.getNome();
        String email = usuario.getEmail();
        String senha = usuario.getSenha();

        // Then (Então)
        // Então os dados devem ser os mesmos que os fornecidos ao criar o usuário
        assertEquals("John Doe", nome, "O nome do usuário deve ser 'John Doe'");
        assertEquals("john.doe@example.com", email, "O email do usuário deve ser 'john.doe@example.com'");
        assertEquals("password123", senha, "A senha do usuário deve ser 'password123'");
    }
}
```
