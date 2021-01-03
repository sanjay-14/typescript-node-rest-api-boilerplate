FROM node:latest as test-env

# set working directory
WORKDIR /app
# copy project file
COPY package.json /app/
# set NODE_ENV to dev
ENV NODE_ENV dev

RUN npm -v
# install node packages

RUN npm i -g yarn

# copy app files

RUN yarn install

RUN yarn run test

COPY --from=test-env /app/ /app/