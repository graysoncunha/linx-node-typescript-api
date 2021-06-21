FROM node:14

WORKDIR /api

COPY ./package.json /api

RUN cd api && npm install

COPY . /api

EXPOSE 3000

CMD ["ts-node", "./api/server.js"]
