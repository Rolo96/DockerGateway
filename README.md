# APIGateway

```
Technological Institute of Costa Rica
Project2 CompraTec
Teacher: Raul Madrigal Acuña
Students: Raul Arias, Rony Paniagua
Script docker swarm
```
## Installation
You need to have Node JS and npm installed in your development environment.
```
1. Download the source repository.
2. Run "npm install".
3. Run "npm start".
4. You can consume the service through the URL: localhost:8086/
```
## API usage

The API was made to be consumed through a Postman client. We assume that you have enough knowledge about how to use this program.

### Login
In order to acces to the system you need to be registered as an user and request for security token. To get the token send a POST to localhost:8086/CompraTEC/login with your credentials as follows:
```
{
  id: 1,
  password: "123"
}
```
The system will return your token, save it. Any other consult you send from now, need this token as a Bearer Token, otherwise your request will be refused. The token is valid for 30 minutes, when it expires you will have to request another one.

### Users
To comunicate to the users microservice, use the following URL:
```
localhost:8086/users
```
#### Consult all users
To consul all the users just send a GET with no params.

#### Consult one user
To consult one user send a GET with the id of the user as a param, or send:
```
localhost:8086/CompraTEC/users?id=1
```
#### Create a new user
To insert an user in the data base send a POST with the following JSON:
```
{
  "id": 1,
  "firstname": "A",
  "lastname": "B",
  "password": "123"
}
```
Remember the id of the users is unique, it will be a conflict if a duplicated id is sent. The API will response with the result of the post.

#### Update an existing user
To update an user send a PUT with the id of the user and the other three attributes as follows:
```
{
  "id": 1,
  "firstname": "A",
  "lastname": "B",
  "password": "123"
}
```
The firstname, lastname and password will be updated with the new values. Remember send all the attributes when updating an user, otherwise, missing ones will be updated with a null value or the server will return a conflict.

#### Delete an user
To delete an user send a DELETE with the id of the user as a param, or send:
```
localhost:8086/CompraTEC/users?id=1
```
### Products

To comunicate to the products microservice, use the following URL:
```
localhost:8086/products
```
#### Consult all products
To consul all the products just send a GET with no params.

#### Consult one product
To consult one product send a GET with the code of the product as a param, or send:
```
localhost:8086/CompraTEC/products?code=1
```
#### Create a new product
To insert an product in the data base send a POST with the following JSON:
```
{
  "code": 1,
  "name": "A",
  "amount": 1,
  "cost": 1
}
```

#### Update the cost of a product
To update the cost of a product send a PUT with the code, name and the new cost as follows:
```
{
  "code": 1,
  "name": "A",
  "cost": 1
}
```

#### Delete a product
To delete an product send a DELETE with the code of the product as a param, or send:
```
localhost:8086/CompraTEC/products?code=1
```

### Orders
To comunicate to the orders microservice, use the following URL:
```
localhost:8086/orders
```
#### Consult all orders
To consul all the orders just send a GET with no params.

#### Consult one order
To consult one order send a GET with the id of the order as a param, or send:
```
localhost:8086/CompraTEC/orders?code=1
```
#### Create a new order
To insert an order in the data base send a POST with the following JSON:
```
{
  "userid": 1,
  "total": 1,
  "products": [
	  {"id": 1, "amount": 1, "cost": 1},
	  {"id": 2, "amount": 2, "cost": 2}
  ]
}
```

#### Update an order
To update a order send a PUT with the id name and the other attributes as follows:
```
{
  "id": 1,
  "userid": 1,
  "total": 1,
  "products": [
	  {"id": 1, "amount": 1, "cost": 1},
	  {"id": 2, "amount": 2, "cost": 2}
  ]
}
```

#### Delete an order
To delete an order send a DELETE with the id of the order as a param, or send:
```
localhost:8086/CompraTEC/orders?code=1
```
