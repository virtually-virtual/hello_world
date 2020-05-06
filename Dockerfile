FROM node:11.15.0
COPY package-lock.json .
COPY package.json .
RUN npm install

CMD ["node", "hello_world.js"]
