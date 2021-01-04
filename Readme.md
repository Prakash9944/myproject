# NodeJs Server

## Get started

1. Install dependencies (one time only)

   $ npm install

2. run node server

   $ nodemon server.js


## Install Postman && send curl call via postman

1. access api call via postman

    url: http://localhost:5000/api/users/signin


2. siginUp Json and select application type would be json

    {
        username: "Prakash",
        email: "prakash@gmail.com",
        password: "prakashraj"
    }

3. siginIN Json

    {
        email: "prakash@gmail.com",
        password: "prakashraj"
    }