FROM node:18

WORKDIR /home/node/app

COPY package.json ./
COPY tsconfig.json ./

COPY src ./src
COPY . .
RUN npm install

EXPOSE 4000

CMD  npm run dev