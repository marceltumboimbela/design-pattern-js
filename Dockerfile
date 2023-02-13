FROM node:latest
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
USER root
RUN npm install
USER node
CMD ["npm", "test"]