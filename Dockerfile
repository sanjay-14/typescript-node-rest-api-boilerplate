FROM alpine:3.5

# install node
RUN apk add --no-cache nodejs tini

# set working directory
WORKDIR /app

# copy project file
COPY package.json /app/

# set NODE_ENV to dev
ENV NODE_ENV dev

# install node packages
RUN npm -g yarn \
    yarn install

# copy app files
COPY . /app

CMD yarn run test