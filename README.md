# Teste técnico SunHub
Resolução do desafio fullstack do processo seletivo da SunHub. Neste repositório está contido apenas o frontend, para entrar no backend acesse: https://github.com/edilson-nantes/task-manager-frontend

<h1 align="center">
<br>
Desafio processo Seletivo SunHub
</h1>

</h1>

## Tecnologias

As tecnologias utilizadas foram:

- **Lucide** — Biblioteca de ícones para React

- **Tailwind CSS** —  Framework de CSS para estilização e layout 

- **TypeScript** — Linguagem de programção usada para desenvolver a aplicação

- **React.Js** Biblioteca JavaScript para construir interfaces de usuário

 ## Descrição
 O projeto se baseia em construir um gerenciador de tarefas(Task Manager). Onde o frontend consiste em se comunicar com a API para fazer o gerenciamento de tarefas, mantendo estados de autenticação e de tarefas.

- Login Page
- Register Page
- Tasks Page
- Task edit e details pages

 ## Requisitos

**LOGIN - AUTHENTICATE USER** 
- Card com formulário para login com email e senha.
- Link para cadastro de novos usuários.
- Botão para realizar a autenticação.
- Validação se todos os campos foram preenchidos
- Validação de credenciais (se o email e senha forem corretos o usuário acessa a aplicação).

**REGISTER PAGE - CREATE A NEW USER**
- Card com formulário para cadastro de novos usuários com nome, email e senha.
- Campo de comfirmação de senha, para garantir que o usuário digitou a senha correta.
- Botão para realizar o cadastro.
- Autenticação automática ao se cadastrar.
- Validação se todos os campos foram preenchidos.

**TASKS PAGE - MANAGE THE TASKS LIST**
- Header com informações do usuário cadastrado.
- Botão para realizar o logoff.
- Card com formulário para adicionar novas tarefas com os campos título, descrição e status.
- Botão para adicionar tarefa.
- Validação se todos os campos foram preenchidos.
- Card com a lista de todas as tarefas cadastradas pelo usuário.
- Botão para acessar os detalhes de cada tarefa.
- Botão para deletar uma tarefa.

**TASK DETAILS PAGE - SEE DETAILS AND EDIT A TASK**
- Header com informações do usuário cadastrado.
- Botão para realizar o logoff.
- Card com os detalhes da tarefa selecionada.
- Botão para entrar no modo de edição.
- Botão para voltar.
- Formulário de edição de tarefa (modo de edição).
- Botão de salvar alterações (modo de edição).
- Botão de cancelar as edições (modo de edição).

## Funcionalidades Desenvolvidas
    - Autenticação de usuários usando um email e senha.
    - Cadastro de novos usuários com informações de nome, email, senha.
    - CRUD de tarefas para o gerenciamento de lista de tarefas.
    - Responsividade para tamanhos diferentes de telas e dispositivos.
    - Navegação entre rotas dentro da aplicação.
    - Gerenciamento de estados usando Redux para as tasks e ContextAPI para a autenticação de usuário.
    - Armazenmanto e gerenciamento de token de autenticação localmente.
    - Validação dos dados de entrada.


##  Download e Teste



-  Instalar o [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/pt-br/download/) + [npm](https://www.npmjs.com/get-npm) e ter configurado o [backend](https://github.com/edilson-nantes/task-manager-backend):

```bash
# Versões utilizadas no desenvolvimento.
 node -v
v22.14.0

 npm -v
10.9.2
```

```bash
# Clonar o repositório
 git clone https://github.com/edilson-nantes/task-manager-frontend/

#Entrar no diretório
 cd task-manager-backend

#Verifique se o arquivo .env está com a baseURL da API backend confirado corretamente.

#Instalar as dependências
 npm install
```
- As credenciais do arquivo .env podem ser alteradas de acordo com a necessidade, mas as credenciais usadas no desenvolvimento foram:

```bash
VITE_API_BASE_URL=http://localhost:8080/api
```

- Digite o seguinte comando para rodar a aplicação:
```bash
npm run dev
```

- Por ultimo abra seu navegador e acessez:

```
http://localhost:5173/
```

---
