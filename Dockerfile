FROM alpine

RUN apk add --update nodejs npm 

WORKDIR /app

COPY client/package.json .
COPY smart_contracts/package.json .

RUN npm install

COPY . .

EXPOSE 3000

WORKDIR /app/client

CMD ["npm","run","build"]
# docker tag local-image:tagname new-repo:tagname
# docker push new-repo:tagname