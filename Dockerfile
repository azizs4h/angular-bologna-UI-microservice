FROM node:latest AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --optimization=true

### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/bologna-bilgi-paketi /usr/share/nginx/html
COPY /nginx/default.conf /etc/nginx/nginx.conf