# Dockerfile keycloak
## Overview
This is made to work on a server side, it can be adapted to work on local side.
The keycloak version is the 7.0.1

## Server configuration
The server environment variables will allow you to configure the keycloak database

-   KEYCLOAK_PASSWORD (Password for admin)
-   KEYCLOAK_USER (Login admin)
-   PORT (Exposed port for docker, here 8080)
-   PROXY_ADDRESS_FORWARDING (An option to allow redirect uri behind a proxy)
   
To connect to an external db (highly recommended for a server, or during a restart everything can be loast):

-   DB_ADDR (Db host) 
-   DB_DATABASE (Db name)
-   DB_PASSWORD (Db password)
-   DB_PORT (Db  port)
-   DB_USER (User to connect to the db)
-   DB_VENDOR  (Db type, postgres, mongodb, mysql..)

## Configuration for local
```dockerfile
FROM jboss/keycloak:7.0.1

COPY auth-require-role-extension-1.0.0.0-SNAPSHOT.jar /opt/jboss/keycloak/standalone/deployments/

ENV KEYCLOAK_USER=admin

ENV KEYCLOAK_PASSWORD=admin

EXPOSE 8080

CMD ["-b", "0.0.0.0"]
```

## Launch
```sh
$ sudo docker build --tag mykeycloack .
$ sudo docker run --publish 8080:8080 mykeycloack
```
