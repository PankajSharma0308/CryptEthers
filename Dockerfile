FROM alpine

RUN apk add --update nodejs npm 

WORKDIR /app

COPY client/package.json .
COPY smart_contracts/package.json .

RUN npm install
RUN npm install vite

COPY . .

EXPOSE 3000

WORKDIR /app/client

CMD ["npm","run","dev"]
# docker tag local-image:tagname new-repo:tagname
# docker push new-repo:tagname