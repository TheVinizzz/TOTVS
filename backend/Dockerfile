FROM node:18

# Set the timezone to São Paulo
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /usr/src/api

COPY . .

RUN npm install

RUN npm run build

RUN npx prisma generate

EXPOSE 3000

CMD [  "npm", "run", "start:migrate:prod" ]