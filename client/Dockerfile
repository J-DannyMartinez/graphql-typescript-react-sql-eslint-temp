
FROM node:14.15.4-buster

# RUN npm install -g http-server

WORKDIR /client

COPY package*.json /client/


RUN npm install

COPY . /client/

EXPOSE 3000

# CMD ["httpserver", "dist"]
CMD ["npm", "start", "--host=0.0.0.0"]