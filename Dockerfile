FROM node:12-alpine AS builder

# set working directory
WORKDIR /app
# copy project file
COPY package.json /app/
COPY . /app/
# set NODE_ENV to dev
ENV NODE_ENV dev

# RUN npm install -g yarn
# install node packages

# copy app files

RUN yarn -v

RUN yarn install

# RUN yarn run test

# COPY --from=builder /app/ /app/