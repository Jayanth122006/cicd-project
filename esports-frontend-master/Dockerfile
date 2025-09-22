# --- STAGE 1: Build the React Application ---
# Using Node.js version 20 to satisfy package requirements
FROM node:20-alpine AS builder

WORKDIR /app

# Install build tools needed for native dependencies (imagemin)
RUN apk add --no-cache autoconf automake libtool build-base python3 zlib-dev nasm

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Build the application for production
RUN npm run build


# --- STAGE 2: Serve the Application with Nginx ---
FROM nginx:stable-alpine

# Copy the production build from the builder stage
# This correctly points to Vite's 'dist' output folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the Docker network
EXPOSE 80
