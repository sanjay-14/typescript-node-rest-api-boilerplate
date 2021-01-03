FROM node:latest as test-env

# set working directory
WORKDIR /app
# copy project file
COPY package.json /app/
# set NODE_ENV to dev
ENV NODE_ENV dev

RUN npm -v
# install node packages

RUN npm i 
# copy app files

COPY --from=test-env /app/ /app/