FROM node:latest

# RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app

# COPY package.json /usr/src/app/

# COPY . /usr/src/app

WORKDIR /usr/app

COPY ./ /usr/app

RUN npm install

EXPOSE 8000

CMD [ "npm", "start" ]