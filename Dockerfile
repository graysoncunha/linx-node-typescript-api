FROM node:14-alpine

WORKDIR /api

COPY ./package.json /api

RUN cd /api && npm install

COPY ./src /api/src

EXPOSE 3000

CMD ["ts-node", "./api/server.js"]
