FROM node
COPY app.js ./app/app.js
WORKDIR app
RUN npm install rpi-gpio
CMD node app.js
