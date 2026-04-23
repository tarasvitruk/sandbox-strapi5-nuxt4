FROM node:22

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

USER node
WORKDIR /usr/src/app

COPY --chown=node:node backend/package*.json ./
RUN npm ci

COPY --chown=node:node backend .
RUN npm run build

EXPOSE 1337
CMD ["npm", "run", "start"]
