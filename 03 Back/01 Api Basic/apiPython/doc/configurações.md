Usar Python no Visual Studio Code (VS Code) no Linux é bem simples e eficiente. Siga este guia passo a passo:

---

### 1. **Instalar o Python**

Certifique-se de que o Python está instalado no seu sistema:

1. **Verificar instalação do Python**:

    ```bash
    python3 --version
    ```

    Se o Python não estiver instalado, você pode instalá-lo:

    ```bash
    sudo apt update
    sudo apt install python3 python3-pip
    ```

2. **Instale um gerenciador de ambiente virtual (opcional, mas recomendado)**:
    ```bash
    sudo apt install python3-venv
    ```

---

### 2. **Instalar o VS Code**

1. **Baixe o VS Code**:

    - Acesse o site oficial: [https://code.visualstudio.com/](https://code.visualstudio.com/)
    - Baixe o pacote `.deb` para Linux.

2. **Instale o VS Code**:

    ```bash
    sudo apt install ./<nome-do-arquivo>.deb
    ```

3. **Abra o VS Code**:
    ```bash
    code
    ```

---

### 3. **Configurar o VS Code para Python**

1. **Instale a extensão de Python**:

    - Abra o VS Code.
    - Clique no ícone de **Extensões** (no lado esquerdo, ícone de quadrado).
    - Pesquise por **Python** e instale a extensão oficial da Microsoft.

2. **Configuração de um ambiente Python**:
    - Certifique-se de que o Python está detectado pelo VS Code:
        - No VS Code, pressione `Ctrl + Shift + P` e digite **Python: Select Interpreter**.
        - Escolha a versão do Python instalada no sistema (geralmente algo como `Python 3.x`).

---

### 4. **Criar e Rodar um Script Python**

1. **Criar um arquivo Python**:

    - No VS Code, crie um novo arquivo com a extensão `.py` (ex.: `meu_script.py`).

2. **Escreva código Python**:

    - Exemplo:
        ```python
        print("Olá, Linux com Python no VS Code!")
        ```

3. **Rodar o script**:
    - Abra o terminal integrado do VS Code (Ctrl + `).
    - Execute o script:
        ```bash
        python3 meu_script.py
        ```

---

### 5. **Configurar um Ambiente Virtual (opcional)**

É uma boa prática usar um ambiente virtual para isolar as dependências do projeto:

1. **Criar o ambiente virtual**:

    ```bash
    python3 -m venv venv
    ```

2. **Ativar o ambiente virtual**:

    ```bash
    source venv/bin/activate
    ```

3. **Selecionar o ambiente virtual no VS Code**:
    - Após ativar o ambiente virtual, vá em `Ctrl + Shift + P` > **Python: Select Interpreter** e selecione o ambiente virtual (`venv`).

---

### 6. **Debug no VS Code**

1. **Configurar o debug**:

    - Pressione `F5` no arquivo Python.
    - Caso solicitado, escolha a configuração padrão de Python.

2. **Pontos de interrupção**:
    - Clique no número da linha para adicionar pontos de interrupção e depurar o código.

---

### 7. **Instalar e Gerenciar Pacotes**

sudo apt install python3-pip

1. **Instale pacotes com o `pip`**:

    - Exemplo para instalar `flask`:
        ```bash
        pip install flask
        ```

2. **Gerencie pacotes no ambiente virtual**:
    - Certifique-se de que o ambiente virtual está ativo ao instalar pacotes.

---

Agora você está pronto para programar em Python no VS Code no Linux! 🚀
