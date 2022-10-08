FROM node:alpine

WORKDIR /app

COPY client/package.json .
COPY smart_contracts/package.json .

RUN npm install

COPY . .

EXPOSE 3000

WORKDIR /app/client

CMD ["npm","run","dev"]