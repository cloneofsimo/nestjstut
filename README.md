# Going Over NestJS tutorial from John Ahn

https://www.youtube.com/watch?v=3JminDpCJNE&t=17376s

I want to be a NestJS expert someday!

# Modification from original Tutorial

## Swagger UI

Adding Swagger UI to the project with NestJS, was helped by this post: https://jhyeok.com/nestjs-swagger/

Validation Pipe, Class Validator

## Postgres with local Docker in Linux os

Tips:

https://pagertree.com/2020/01/06/docker-cheat-sheet/

Largely followed:

https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea

1. pull postgres image from https://hub.docker.com/_/postgres.

2. `sudo docker run -d --name new_postgres -e POSTGRES_PASSWORD=mumumama -p 5432:5432 postgres`

3. `sudo docker run -p 8080:80 -e 'PGADMIN_DEFAULT_EMAIL=cloneofsimo@gmail.com' -e 'PGADMIN_DEFAULT_PASSWORD=cloneofsimo' --name dev-pgadmin -d dpage/pgadmin4`

4. `su
5. `sudo docker inspect new_postgres -f "{{json .NetworkSettings.Networks }}"`
