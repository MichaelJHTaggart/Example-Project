DROP TABLE users;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "email" varchar,
  "password" varchar
);

INSERT INTO "users" (id,username,email,password) VALUES (1,'Marsh','turpis@parturient.com','Blake');
INSERT INTO "users" (id,username,email,password) VALUES (2,'Whitaker','sed.consequat@Quisque.edu','Rashad');
INSERT INTO "users" (id,username,email,password) VALUES (3,'Dillard','rutrum.urna@posuere.org','Merrill');