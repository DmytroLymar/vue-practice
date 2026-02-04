# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.12.0-alpine


FROM node:${NODE_VERSION} AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:1.27-alpine AS final

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
