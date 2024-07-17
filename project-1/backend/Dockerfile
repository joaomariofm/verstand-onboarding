# Use the official Node.js image.
FROM node:22-bookworm

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

# Copy local code to the container image.
COPY . .

# Expose the port the app runs on.
EXPOSE 3000


# Run the migrations and web service on container startup.
CMD ["/bin/bash", "-c", "npm run migrate;npm start"]
