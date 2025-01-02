FROM node:22

WORKDIR /app

COPY . .

ARG FIREBASE_TOKEN

RUN echo "$(FIREBASE_TOKEN)" > .env.local

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
