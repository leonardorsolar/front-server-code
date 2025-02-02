# Criando a rota

Dentro do vscode, crie o arquivo db.ts

```js
// Simulação de banco de dados, geralmente você vai ter uma configuração real aqui
export const db = {
  usuarios: [] as any[],
};
```

Terá que chamá-lo no arquivo ServicoUsuario.ts

```js
import { Usuario } from '../modelos/Usuario';
import { db } from '../bancodados/db';

export class ServicoUsuario {
  private usuarios: Usuario[] = [];

  constructor() {}

  criarUsuario(dado: any): Usuario {
    console.log('ServicoUsuario');
    console.log(dado);
    const usuario = new Usuario(dado.name, dado.email, dado.pasword);
    //this.usuarios.push(usuario); // Simula a persistência de usuários
    const dadosBanco = db.usuarios.push(usuario); // Simula a persistência de usuários
    console.log(dadosBanco);
    return usuario;
  }

  //    listarUsuarios(): Usuario[] {
  //     return db.usuarios;
  //   }
}
```
