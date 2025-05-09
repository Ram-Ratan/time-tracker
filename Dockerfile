FROM node:18.13-slim
RUN pwd
COPY . .
WORKDIR /surface-service
#RUN rm -rf package-lock.json
RUN apt-get update && apt-get install -y curl telnet
RUN ls
#RUN npm run local:i
RUN npm install
RUN npm run build
EXPOSE 7073
ENTRYPOINT ["npm", "run", "start"]