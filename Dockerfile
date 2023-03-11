FROM node:18-alpine

ENV NODE_ENV production

WORKDIR /app

COPY dist /app/
COPY node_modules /app/node_modules
COPY yarn.lock /app/yarn.lock

CMD ["node", "./index.js"]

EXPOSE 3000