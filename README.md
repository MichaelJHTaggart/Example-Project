## Example-Project

The goal of this project is to demonstrate: 

1. [Persistent session in application without the use of Redux](#persistant-session)
2. [Setup a Postgres database with Heroku](#postgres-with-heroku)
3. [Implement Sequelize to make database queries to Heroku](#sequelize)

### Persistant Session

You understand the following problem:
1. A user comes to your website. 
2. They log into your website to access specific information on their account.
3. After logging in, they click the refresh button on their browser.

If not handled the refresh button will do the following: All information in the application is set to is initial state. 

In this application we explore some different ways to store a user's session to handle the refresh button. *Also note that refresh is the default state of submitting a form element

### Postgres with Heroku

You understand that Heroku is going to create a Postgres Database, and will provide you with a code to allow you to make queries to the database that is being stored in Heroku.

### Sequelize

You have learned how to make queries in a Sequel format. Now it is time to learn how to make queries in a Sequelize format!

### Component Tree

![Screen Shot 2021-08-26 at 12 55 24 AM](https://user-images.githubusercontent.com/63270278/130874901-89eb5c03-9283-47c3-8d58-c8ebea63ef33.png)


### Database Model

![Screen Shot 2021-08-26 at 12 55 44 AM](https://user-images.githubusercontent.com/63270278/130874947-c837cd7c-3e74-4a45-8f50-c1e8918029d6.png)
