FROM node:12-alpine
COPY . .
EXPOSE 8080
CMD ["node", "app.js"]
