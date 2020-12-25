FROM node:14-alpine3.12

WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn build
RUN yarn build:server

# backend port
ENV PORT=5000
# front end base url
ENV API_URL=http://localhost:3000

# front (proxy backend if start with '/api')
EXPOSE 3000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
