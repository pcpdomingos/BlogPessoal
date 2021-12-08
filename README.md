# blogPessoalReact
Projeto realizado em pararelo ao bootcamp da Generation Brasil
(Em construção 👨🏽‍💻).

# Sobre
O projeto consiste em uma API REST que realiza as funções de um blog a partir de requisições HTTP enviada pelo usuário.

# Tecnologias utilizadas
- Java
- Spring Boot
- Spring Security
- Swagger

# Funcionalidades
- Criação de perfil
- Criação de perfil adm
- Realização de login
- Criação/Edição/Delete de temas
- Criação/Edição/Delete de postagens
- Criação/Edição/Delete de usuários

# Estruturas de pastas e suas responsabilidades
Models:

Como o nome diz, elas são as classes modelo que tem como função definir o domínio da aplicação, e também a relação entre as entidades.

Services:

- Os services são utilizados para processar toda a lógica do negócio.

Repositores:

- Aqui os dados são recebidos, persistidos ou retornados.  Essa é a camada de persistência dos dados. As lógicas se limitam às próprias necessidades.

Security:

- Trata-se da parte responsável pela segurança dos dados. (endpoints públicos, privados, etc.)

# Validações e segurança

Todos os enpoints possuem validações de diversos tipos, tais como:

- Verificação se todos os dados da requisição foram informados corretamente
- Verificação se as informações do cliente batem com as informações enviadas
- Controle de rotas autenticadas e públicas
