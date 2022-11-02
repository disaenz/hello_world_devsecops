FROM node:14-alpine3.12
RUN apk update && apk add nodejs-current && apk add npm
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm config set strict-ssl false
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]