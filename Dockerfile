FROM node:21-alpine
WORKDIR /app
COPY package.json .
RUN yarn install --force
COPY . .
RUN  yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]