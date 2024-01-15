# syntax=docker/dockerfile:1
FROM node:alpine
WORKDIR ./scaledocker
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]
CMD [ "node", "app.js" ]
