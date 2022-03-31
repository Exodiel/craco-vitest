FROM node:14.19.1-alpine

WORKDIR /code
COPY package*.json /code
RUN yarn cache clean && yarn --update-checksums
COPY . ./code
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]