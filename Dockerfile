# Base image
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular project files
COPY . .

# Build the Angular app
RUN npm run build


# Stage 2: Use Nginx to serve the built app
FROM nginx:latest

# Copy the built app from the previous stage
COPY --from=build /app/dist/sunbird-kids /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
COPY ssl/certificate.crt /etc/ssl/certificate.crt
COPY ssl/private.key /etc/ssl/private.key
# Expose port 80
EXPOSE 80
EXPOSE 443
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

