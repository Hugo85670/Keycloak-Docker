FROM jboss/keycloak:10.0.2

COPY deployments /opt/jboss/keycloak/standalone/deployments

COPY themes /opt/jboss/keycloak/themes/

ENV KEYCLOAK_USER=admin

ENV KEYCLOAK_PASSWORD=admin

EXPOSE 8080

CMD ["-b", "0.0.0.0"]
