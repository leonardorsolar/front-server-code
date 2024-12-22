Usaremos as bibliotecas `Flask` (para a API), `Flask-Cors` (para CORS) e `sqlite3` (para manipulação do banco de dados SQLite).

### Código da API em Python:

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

# Cria uma instância do Flask
app = Flask(__name__)
CORS(app)  # Configura o CORS para permitir requisições de outros domínios

# Conecta ao banco de dados SQLite
DATABASE = './database.db'

def conectar_banco():
    return sqlite3.connect(DATABASE)

# Cria a tabela 'usuarios' se ela ainda não existir
with conectar_banco() as conn:
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    print("Tabela 'usuarios' criada com sucesso!")

# Rota GET para visualização
@app.route("/", methods=["GET"])
def home():
    return "Olá, Mundo! Bem-vindo ao Flask com Python.", 200

# Rota POST para adicionar um usuário ao banco de dados
@app.route("/criar-usuario", methods=["POST"])
def criar_usuario():
    try:
        # Captura os dados do corpo da requisição
        data = request.get_json()
        name = data['name']
        email = data['email']
        password = data['password']

        # Insere o novo usuário na tabela 'usuarios'
        with conectar_banco() as conn:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO usuarios (name, email, password)
                VALUES (?, ?, ?)
            ''', (name, email, password))
            conn.commit()

        return jsonify({"name": name}), 201  # Retorna sucesso ao cliente

    except sqlite3.IntegrityError as e:
        # Verifica se houve uma violação de unicidade
        if "UNIQUE constraint failed" in str(e):
            return jsonify({"error": "E-mail já cadastrado"}), 409  # 409 Conflict
        return jsonify({"error": "Erro ao criar usuário"}), 500  # Erro interno

    except Exception as e:
        print(f"Erro ao criar usuário: {e}")
        return jsonify({"error": "Erro inesperado"}), 500  # Erro genérico

# Inicia o servidor
if __name__ == "__main__":
    PORT = 3000  # Porta em que o servidor vai rodar
    app.run(host="0.0.0.0", port=PORT, debug=True)
```

---

### Instalação de Dependências

Certifique-se de instalar as dependências necessárias antes de executar a API:

```bash
pip install flask flask-cors
```

---

### Explicação

1. **Configuração do Banco de Dados**:

    - O banco de dados SQLite é configurado na variável `DATABASE` e conectado através de `sqlite3.connect`.

2. **Criação da Tabela**:

    - A tabela `usuarios` é criada se ainda não existir, garantindo que a aplicação esteja pronta para receber dados.

3. **Rotas**:

    - `GET /`: Retorna uma mensagem de boas-vindas.
    - `POST /criar-usuario`: Insere um novo usuário no banco de dados. Trata erros, como tentativa de cadastro com e-mail duplicado.

4. **CORS**:

    - Configurado com `Flask-Cors` para permitir chamadas de outros domínios.

5. **Execução**:
    - O servidor é iniciado na porta 3000, semelhante ao comportamento do Express.

---

### Testando a API

1. **Rota Principal**:

    - `GET http://localhost:3000/`
    - Resposta: `"Olá, Mundo! Bem-vindo ao Flask com Python."`

2. **Criar Usuário**:
    - `POST http://localhost:3000/criar-usuario`
    - Corpo (JSON):
        ```json
        {
            "name": "John Doe",
            "email": "john@example.com",
            "password": "123456"
        }
        ```
    - Resposta de Sucesso (201):
        ```json
        {
            "name": "John Doe"
        }
        ```
    - Resposta de Erro (E-mail duplicado, 409):
        ```json
        {
            "error": "E-mail já cadastrado"
        }
        ```

---

Isso cria uma API funcional em Python com Flask, replicando a funcionalidade da API original em JavaScript com Express.

## Rodar o script:

    Abra o terminal integrado do VS Code (Ctrl + `).
    Execute o script:

python3 index.py

# Front: abra o front

02 Front/01HtmlCssJavascript/HtmlCssJavascript

clique em index.htm e envie os dados com o servidor phyton online
