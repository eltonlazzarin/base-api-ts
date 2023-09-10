FROM node:14-slim

RUN apt update

WORKDIR /app

COPY package.json package.json
RUN npm i

COPY . .

CMD ["npm", "start"]
