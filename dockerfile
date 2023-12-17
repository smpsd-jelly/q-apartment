FROM node:14 AS builder
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/q-apartment /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
#COPY ./assetlinks.json /usr/share/nginx/html/.well-known/assetlinks.json
#COPY ./apple-app-site-association /usr/share/nginx/html/.well-known/apple-app-site-association
EXPOSE 80

