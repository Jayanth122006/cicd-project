# Use an official OpenJDK 17 image as the base
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven wrapper files first to leverage Docker's caching
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Download all dependencies
RUN ./mvnw dependency:go-offline

# Copy the application source code
COPY src ./src

# Build the application into a JAR file, skipping tests for faster builds
RUN ./mvnw package -DskipTests

# Expose the port the application runs on
EXPOSE 8080

# The command to execute when the container starts
ENTRYPOINT ["java", "-jar", "target/auth-service-0.0.1-SNAPSHOT.jar"]

