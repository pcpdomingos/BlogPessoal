<h1>Blog Pessoal</h1>


<p>Projeto realizado em paralelo ao bootcamp da Generation Brasil</p>
<h2>Sobre</h2>
O projeto consiste em uma API REST que realiza as funções de um blog a partir de requisições HTTP enviada pelo usuário.

<h2>Tecnologias utilizadas</h2>

<ul>
<li>Java</li>
<li>Spring Boot</li>
<li>Spring Security</li>
<li>Swagger</li>
</ul>

<h2>Funcionalidades</h2>

<ul>
<li>Criação de perfil</li>
<li>Criação de perfil adm</li>
<li>Realização de login</li>
<li>Criação/Edição/Delete de temas</li>
<li>Criação/Edição/Delete de postagens</li>
<li>Criação/Edição/Delete de usuários</li>
</ul>


## Estrutura de pastas e suas responsabilidades

#### Models
Como o nome já diz, são as classes modelo. Elas que definem o domínio da aplicação, além da relação entre as entidades.

#### Services
Os services são chamados para processar toda a lógica do negócio.

#### Repositories
Trata-se da camada de persistência dos dados. As lógicas se limitam às próprias necessidades. Aqui os dados são recebidos, persistidos ou retornados.

#### security
Literalmente a configuração de segurança do projeto. (endpoints públicos, privados, etc.)

## Validações e segurança

**Todos os enpoints possuem validações de diversos tipos, tais como:**

- Verificação se todos os dados da requisição foram informados corretamente
- Verificação se as informações do cliente batem com as informações enviadas 
- Controle de rotas autenticadas e públicas

#### Encriptação da senha e login

Sim! As senhas estão sendo gravadas encriptadas! Logo o login também está bem seguro :).
