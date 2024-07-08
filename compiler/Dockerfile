# Use a lightweight Node.js image with Node.js version 20 on Alpine Linux
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Install necessary packages for various languages and development tools
RUN apk update && \
    apk add --no-cache \
    g++ \
    openjdk11-jre \
    python3 \
    py3-pip \
    cpp11

# Install npm dependencies based on package.json changes only
COPY package.json .
RUN npm install

# Copy the entire application code to the working directory
COPY . .

# Expose port 8080 for the application
EXPOSE 8080

# Start the application with the default CMD
CMD ["node", "index.js"]
