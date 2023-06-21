FROM alpine

RUN apk add --update nodejs npm 

WORKDIR /app

COPY client/package.json .
COPY smart_contracts/package.json .

RUN npm install
RUN npm install vite -g

COPY . .

EXPOSE 80

WORKDIR /app/client

CMD ["npm","run","dev"]
