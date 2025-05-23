# App de Agendamentos do Salão da Rosana

Este é um aplicativo web simples para gerenciamento de agendamentos de clientes em um salão de beleza. O app foi desenvolvido em React e utiliza o armazenamento local do navegador (localStorage) para salvar os dados dos agendamentos.

## Funcionalidades

- Cadastrar novos agendamentos com nome, serviço, data, horário e observações
- Listar todos os agendamentos salvos
- Editar e excluir agendamentos existentes
- Interface moderna, responsiva e fácil de usar

## Como rodar o projeto

1. **Pré-requisitos:**
   - Node.js e npm instalados

2. **Instale as dependências:**
   ```
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```
   npm start
   ```
   O app abrirá automaticamente no navegador em [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

- `src/pages/appointmentForm.js`: Formulário para criar novos agendamentos
- `src/pages/appointmentList.js`: Lista de agendamentos com opções de editar e excluir
- `src/services/appointmentService.js`: Funções para salvar, buscar, editar e excluir agendamentos no localStorage
- `src/components/Navbar.js`: Navegação principal
- `src/index.css`: Estilos globais do app

## Observações

- Todos os dados são salvos apenas no navegador do usuário (localStorage). Não há backend.
- O app é apenas para fins de demonstração e uso local.

## Personalização
Se quiser adicionar novas funcionalidades ou mudar o visual, basta editar os arquivos em `src/`.

---

Desenvolvido com ❤️ para facilitar o dia a dia do Salão da Rosana.
