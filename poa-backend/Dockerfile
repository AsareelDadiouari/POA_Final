FROM maven:3.8.3-openjdk-17 AS Builder
WORKDIR app/
COPY pom.xml .
RUN mvn -e -B dependency:resolve
COPY src ./src
COPY ssl/keystore.p12 ./ssl/keystore.p12
RUN mvn clean -e -B package

FROM amazoncorretto:17-alpine-jdk
WORKDIR app/
ARG JAR_FILE=target/*.jar
ARG SSL_FILE=ssl/*.p12
COPY --from=Builder /app/${JAR_FILE} poa-backend-0.0.1-SNAPCHOT.jar
COPY --from=Builder /app/${SSL_FILE} ./ssl/keystore.p12
ENTRYPOINT ["java","-jar","/app/poa-backend-0.0.1-SNAPCHOT.jar"]