FROM amazoncorretto:17-alpine-jdk
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
COPY /ssl/keystore.p12 /ssl/keystore.p12
ENTRYPOINT ["java","-jar","/app.jar"]