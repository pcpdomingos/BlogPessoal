<h1>Blog Pessoal</h1>


<p>Projeto pessoal para treinos de aprendizagem, ou seja, ele sempre estará em mudanças. 👨‍💻</p>
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
<li>Realização de login</li>
<li>Criação/Edição/Delete de temas</li>
<li>Criação/Edição/Delete de postagens</li>
</ul>


## Estrutura de pastas e suas responsabilidades

#### Models
Model são as classes responsáveis pelo domínio da aplicação e também da relação entre as entidades.

#### Services
A camada de serviço são criadas para processar a lógica de negócio.

#### Repositories
Trata-se da persistência dos dados. As lógicas se limitam às próprias necessidades. Aqui os dados são recebidos, persistidos ou retornados.

#### security
Envolve toda a parte de segurança do projeto. (endpoints públicos, privados, etc.)

## Validações e segurança

**Todos os enpoints possuem validações de diversos tipos, tais como:**

- Verificação se todos os dados da requisição foram informados corretamente
- Verificação se as informações do cliente coincidem com as informações enviadas 
- Controle de rotas autenticadas e públicas

#### Encriptação da senha e login

As senhas passam por um sistema de criptografia então seu login estará seguro.
