# Setup & Run Build
FROM node:14.17 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Copy to Docker Container
FROM nginx:alpine
COPY --from=node /app/dist/purple-cow /usr/share/nginx/html
