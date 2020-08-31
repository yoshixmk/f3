FROM node:14-alpine3.12

WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn build

# backend port
ENV PORT=5000
# backend outside from front
ENV VITE_BASE_URL=http://localhost:3000/api

# front (proxy backend if start with '/api')
EXPOSE 3000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
