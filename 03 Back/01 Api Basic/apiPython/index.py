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
