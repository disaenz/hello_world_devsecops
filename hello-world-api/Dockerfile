FROM node:14-alpine3.12
#FROM node:18-alpine3.15
RUN apk update && apk add nodejs-current && apk add npm
WORKDIR /usr/src/app
COPY hello-world-api/package*.json ./
RUN npm config set strict-ssl false
RUN npm install
COPY hello-world-api .
EXPOSE 3200
CMD [ "node", "app.js" ]