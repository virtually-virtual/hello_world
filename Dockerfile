FROM node:11.15.0

RUN npm install

CMD ["node", "hello_world.js"]
