FROM node:20.12.0-alpine3.19

WORKDIR /app

ARG DATABASE_URL
ARG JWT_SECRET
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL

ENV DATABASE_URL=${DATABASE_URL}
ENV JWT_SECRET=${JWT_SECRET}
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
ENV NEXTAUTH_URL=${NEXTAUTH_URL}

COPY package* . 
COPY tsconfig.json .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . . 

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
