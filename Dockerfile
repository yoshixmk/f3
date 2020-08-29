FROM node:14

WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn build

# backend port
ENV PORT=5000
# backend outside from front
ENV VITE_BASE_URL=http://localhost:5000

# front
EXPOSE 3000
# backend
EXPOSE 5000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
