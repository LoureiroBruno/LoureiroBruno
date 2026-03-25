# Bruno Loureiro | Portfólio Full Stack

<p align="center">
  <a href="https://glittering-beignet-c7f54e.netlify.app/">Acessar portfólio publicado</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Badge React" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="Badge JavaScript" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="Badge React Router" />
  <img src="https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Badge CSS Modules" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Badge Netlify" />
</p>

## Sobre o projeto

Este repositório reúne o **portfólio pessoal de Bruno Loureiro**, desenvolvido em **React** e publicado no **Netlify**. A aplicação apresenta uma home com banner de apresentação profissional, listagem de posts em formato de cards ilustrados, página "Sobre Mim" e páginas de detalhe com conteúdo renderizado em Markdown.

Além de funcionar como vitrine profissional, a aplicação demonstra uma estrutura organizada para componentes reutilizáveis, roteamento no cliente e construção de interface responsiva.

## Preview

As imagens abaixo foram capturadas da versão publicada do projeto:

<p align="center">
  <img src="docs/images/ola-mundo-desktop.png" alt="Preview desktop do portfólio Bruno Loureiro" width="72%" />
  <img src="docs/images/ola-mundo-mobile.png" alt="Preview mobile do portfólio Bruno Loureiro" width="22%" />
</p>

## Funcionalidades

- Banner inicial com apresentação do autor, destaques de stack e métricas do projeto.
- Grid com **17 posts** exibidos em cards com capas ilustradas.
- Navegação entre páginas com **React Router DOM**.
- Renderização dos artigos em **Markdown** com **React Markdown**.
- Sugestão de outros posts ao final da leitura.
- Layout responsivo para desktop e mobile.

## Tecnologias usadas neste projeto

### Front-end

- React 18
- JavaScript
- CSS Modules
- React Router DOM
- React Markdown

### Ferramentas e deploy

- Create React App
- npm
- Netlify

## Conhecimentos complementares

Além das tecnologias usadas neste projeto, este README também destaca conhecimentos complementares do autor:

<p>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Badge Docker" />
  <img src="https://img.shields.io/badge/Docker_Swarm-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Badge Docker Swarm" />
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Badge Kubernetes" />
  <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" alt="Badge Jenkins" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="Badge GitHub Actions" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Badge Next.js" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Badge Java" />
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Badge Spring Boot" />
  <img src="https://img.shields.io/badge/Quarkus-4695EB?style=for-the-badge&logo=quarkus&logoColor=white" alt="Badge Quarkus" />
  <img src="https://img.shields.io/badge/Scrum-009FDA?style=for-the-badge&logo=jira&logoColor=white" alt="Badge Scrum" />
</p>

## Estrutura do projeto

- `src/componentes`: componentes reutilizáveis da interface.
- `src/paginas`: páginas principais da aplicação.
- `src/json/posts.json`: base local com os conteúdos dos posts.
- `public/assets/posts`: imagens de capa utilizadas nos cards e posts.
- `docs/images`: screenshots usadas neste README.

## Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/LoureiroBruno/LoureiroBruno.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd LoureiroBruno
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o ambiente de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra `http://localhost:3000` no navegador.

## Deploy

Projeto publicado em:

- https://glittering-beignet-c7f54e.netlify.app/

Para deploys no Netlify com **React Router**, o repositório já inclui o fallback de SPA via arquivo `_redirects`.
