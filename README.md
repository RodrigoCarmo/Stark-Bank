# Desafio técnico Stark Bank

Realizei a criação de uma API em Node.js para executar as tarefas propostas no desafio. Essa API possui uma entidade de usuário para <br> 
realizar a chamada do endpoint que realizará a geração de faturas com clientes aleatórios e consequentemente as transferências na conta solicitada. <br>
Fiz o deploy da API na plataforma ```Heroku``` e utilizei a ferramenta do site https://requestbin.com/ para auxiliar na visualização dos webhooks. <br>

**Observações:
Ao realizar o deploy, pré-configurei as variáveis ambientes para o funcionamento normal, sendo assim, a url de acesso ao webhook é: <br> ```https://ene4awkztxol5.x.pipedream.net/``` , recomendo a execução local para configurar uma própria url através da pasta ```utils```, 
lá você encotrará os arquivos <br> necessários para gerar as chaves privadas e públicas através das variáveis ambiente. <br>
Lembre-se, ao salvar as chaves em uma variável ambiente, elas devem possuir os caracteres na mesma linha
<br>
Ah,a outra conta contribuinte do repositório é minha :)**


## 👨‍🏫Instruções
Se deseja utilizar a API hospedada no Heroku, pode pular o trecho de configuração.<br>

### 👨‍💻Clonar projeto

-Clone o projeto na sua máquina; <br>
-Com o projeto clonado, realize a instalação das dependências de preferência com o ```npm```<br>

### ⚙Configurando 

-Nas variáveis ambientes há todas as configurações necessárias para executar a api.<br>
-Se deseja utilizar a porta 3931 que estabeleci do servidor node, não precisa fazer nada.<br>

### 🗃Rodando API

-Com tudo configurado e desejando o uso local basta executar o servidor normalmente, caso queira, verifique o ```package.json``` <br>
para utilizar os scripts de execução<br>
-Para executar a API através do Heroku, utilize essa url: ```https://stark-bank-challenge.herokuapp.com/``` <br>

### 💻🖱Testando rotas
-Para executar o servidor rode ```npm run dev:server```<br>
-Após a execução do servidor, execute uma requisição do tipo **POST** como teste na rota ```http://localhost:3931/user/create``` ou 
```https://stark-bank-challenge.herokuapp.com/user/create``` utilizando o Insomnia ou outro de sua preferência, enviando os seguintes dados em JSON:<br>

#### Criação de usuário

```JSON

{
	"access_code": "87522",
	"password": "12345678"
}

```


#### Autenticando
-Nesta rota você deve enviar a requisição do tipo **POST** para a rota: <br>
```http://localhost:3931/user/auth`` ou ```https://stark-bank-challenge.herokuapp.com/user/auth```, feito isso, será retornado o id e o token jwt.<br>

#### Atualizando senha do usuário

- Para atualizar a senha do usuário, faça um requisição do tipo **PUT** para a rota: ```http://localhost:3931/user/update`` ou ```https://stark-bank-challenge.herokuapp.com/user/update```, passando um JSON no corpo da requisição, como o seguinte exemplo: 


```JSON

{
	"_id": "617ea60e6a27610d3520dae6",
	"password": "12341234"
}

```

#### Deleção de usuário
-Para deletar o usuário, faça um requisição do tipo **DELETE** para a rota, inserindo o id do usuário: <br>
```http://localhost:3931/user/delete/:_id`` ou ```https://stark-bank-challenge.herokuapp.com/user/delete/:_id```, <br>
passando um JSON no corpo da requisição, como o seguinte exemplo: 

#### Geração de faturas para pessoas aleatórias
-Conforme o solicitado no desafio, essa rota irá disparar a sdk para gerar as faturas de 3 em 3 horas, <br>
finalizando após 24 horas. Aqui, basta apenas se autenticar através de um bearer token obtido na rota de autenticação.<br>

Para acompanhar o webhook através de uma url de sua preferência, recomendo a execução do projeto localmente. <br>



### 🔗Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:<br>

- [Node.js](https://nodejs.org/en/)
- [Javascript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)
- [ESLint](https://eslint.org/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [Heroku](https://www.heroku.com/)

