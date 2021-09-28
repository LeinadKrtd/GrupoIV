FROM node:latest
WORKDIR /crimaxweb
COPY . /package*.json
COPY . .
RUN npm install
RUN npm install express --save
RUN npm i express ejs
RUN npm i nodemon -D
CMD [ "npm","run", "dev" ]
