# Hacker News Integration

o projeto Hacker News Integration é uma aplicação SPA (Single Page Application) que utiliza o Vue.js e interage com a API do Hacker News para exibir as top 100 stories e permite aos usuários favoritá-las, além de mostrar os detalhes da story. Os dados não persistem quando a página é atualizada.

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados em sua máquina:

- Node.js (versão recomendada: 14.x ou superior)
- npm ou yarn
- Git

## Configuração do Ambiente

Clone o repositório do projeto para a máquina local usando:

- git clone https://github.com/tms-5/HackerNews
- cd nome-do-projeto

Instale as dependências do projeto com npm ou yarn:

npm install
#ou
yarn install

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

npm run dev
#ou
yarn dev

Acesse `http://localhost:5173` em seu navegador para ver a aplicação em execução.

## Estrutura de Pastas

Visão geral de como as pastas estão organizadas no projeto:

├─ node_modules/
├─ src/
│ ├─ assets/
│ ├─ components/
│ │ ├─ appComponents/
│ │ ├─ globalComponents/
│ │ │ ├─ ...
│ │ │ └─ MyComponent/
│ │ │ ├─ MyComponent.vue
│ │ │ ├─ MyComponent.test.ts
│ │ └─ └─ style.scss
│ ├─ services/
│ ├─ store/
│ │ └─ modules
│ ├─ views/
│ ├─ App.vue
│ └─ main.ts
├─ package.json
├─ README.md
├─ svelte.config.js
├─ vite.config.ts
└─ ...

## Testes

Os testes são escritos usando Playwright. Para executar os testes, use:

npm run test
#ou
yarn test

## Tecnologias Utilizadas

- Vue.js
- Vuex para gerenciamento de estado
- Vue Router para roteamento
- Playwright para testes end-to-end
- Sass/SCSS para estilos
- Axios para chamadas HTTP
