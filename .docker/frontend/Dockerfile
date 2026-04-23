FROM node:22

ENV HOME=/home/node
ENV NPM_HOME=$HOME/.npm

USER node
WORKDIR /usr/src/app

COPY --chown=node:node frontend/package*.json ./
RUN npm ci

COPY --chown=node:node frontend .
CMD npm run build && npm run start

RUN rm -rf $NPM_HOME

ENV HOST 0.0.0.0
EXPOSE 3000
