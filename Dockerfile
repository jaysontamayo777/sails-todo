FROM node:6.6
RUN apt-get update

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app-root && cp -a /tmp/node_modules /opt/app-root/

WORKDIR /opt/app-root
COPY . .
RUN chmod -R 775 /opt/app-root

RUN export NODE_ENV=production

CMD ["npm", "start"]
