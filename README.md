# ExcelsiorTeam

Bem vindo!

## 🚀 Getting Started

## Ambiente

É necessário a seguinte lista de softwares para rodar e desenvolver essa aplicação:
- yarn ^1.22
- Node ^18
- npm ^10
- VScode
  _ Prettier
  _ ESLint

Apenas instale as dependências e rode o projeto utilizando o yarn:

    yarn
    yarn dev
    acesse o localhost:3000

E comece a utilizar :)

1. Introdução
O Excelsior Team é uma aplicação web desenvolvida utilizando as tecnologias React.js, Next.js, SCSS e HTML5. Seu objetivo principal é proporcionar aos fãs da Marvel uma experiência interativa de busca e organização de seus personagens favoritos. Através da API pública da Marvel, a plataforma permite pesquisar personagens, exibindo seus dados em cards personalizados e oferecendo a funcionalidade de adicioná-los a um grupo intitulado "Your Team".

2. Tecnologias Utilizadas
React.js: Biblioteca JavaScript para construção de interfaces de usuário, responsável pela lógica e renderização dos componentes da aplicação.
Next.js: Framework React para criação de aplicações web e server-side rendering, otimizando o desempenho e SEO.
SCSS: Pré-processador CSS que oferece maior flexibilidade e organização ao estilo visual da aplicação.
HTML5: Linguagem de marcação para estruturação do conteúdo da página.
API da Marvel: Fonte de dados dos personagens, fornecendo informações como nome, descrição, imagem e outros detalhes.

3. Funcionalidades
Busca de Personagens:
Barra de pesquisa intuitiva para encontrar personagens pelo nome.
Resultados apresentados em cards com imagem, título e descrição.
Favoritar Personagens:
Botão de "favoritar" em cada card para adicionar o personagem ao grupo "Your Team".
Lista de personagens favoritos exibida em uma seção dedicada.
Gerenciamento do "Your Team":
Possibilidade de remover personagens da lista de favoritos.
Visualização detalhada dos personagens do "Your Team".

4. Arquitetura da Aplicação
Componentes React:
Componente principal: Contém a lógica principal da aplicação, incluindo a busca, a exibição dos resultados e a gestão do estado dos personagens favoritos.
Componente de card: Representa cada personagem, exibindo suas informações e o botão de favoritar.
Componente da lista de favoritos: Exibe os personagens adicionados ao "Your Team".
Contexto:
Utilizado para compartilhar o estado dos personagens favoritos entre os componentes da aplicação.
Hooks:
useState e useEffect para gerenciar o estado e realizar efeitos colaterais.
Styled-Components:
Integração com SCSS para estilizar os componentes de forma modular e eficiente.
Next.js:
Server-side rendering para melhorar o desempenho inicial da página.

5. Implementação
Obtenção dos dados da API:
Utilização da biblioteca axios ou fetch para realizar as requisições à API da Marvel.
Tratamento dos dados recebidos para formatá-los de acordo com as necessidades da aplicação.
Gerenciamento do estado:
Utilização do hook useState para armazenar os personagens pesquisados, os personagens favoritos e outros estados da aplicação.
Persistência dos dados:
Opcionalmente, implementação de um mecanismo de persistência dos dados dos personagens favoritos utilizando localStorage ou um banco de dados.
Estilização:
Criação de um tema visual utilizando SCSS, com cores, fontes e layout personalizados.
Utilização de styled-components para aplicar os estilos aos componentes.
