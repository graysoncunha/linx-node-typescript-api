## Desafio Linx Node API

- Aplicação construída de acordo com as especificações do repositório [Desafio Backend Node.JS](https://github.com/dcgteam/desafio-backend-nodejs).

### Stack Utilizada

- Node.JS
- Typescript
- MongoDB
- Jest
- Fastify
- Eslint
- Prettier
- Github Actions

### Testes

- Para executar os testes da aplicação basta baixar o repositório e seguir os passos.

1. npm i
1. npm test

### Pipeline CI/CD

- No Pipeline da aplicação foi utilizado o próprio Github Actions que executa os seguintes passos:

1. Altera o código fonte para o working directory. (actions/checkout@v2)
1. Starta o MongoDB em replica set
1. Instala as dependências
1. Executa o lint nos arquivos
1. Executa todos os testes

### Execução

- Para execução da aplicação basta usar o npm start.

#### Jsons Exemplos

- Produto

```json
{
  "title": "Blusa do Imperio",
  "price": 7990,
  "zipcode": "78993-000",
  "seller": "João da Silva",
  "thumbnailHd": "https://cdn.awsli.com.br/600x450/21/21351/produto/3853007/f66e8c63ab.jpg",
  "date": "26/11/2015"
}
```

- Compra

```json
{
  "client": "7e655c6e-e8e5-4349-8348-e51e0ff3072e",
  "clientName": "Luke Skywalker",
  "totalToPay": 1236,
  "creditCard": {
    "cardNumber": "1234123412341234",
    "value": 7990,
    "cvv": 789,
    "cardHolderName": "Luke Skywalker",
    "expirationDate": "12/24"
  }
}
```
