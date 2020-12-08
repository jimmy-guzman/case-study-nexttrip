FROM node:14.15.1-alpine as build

WORKDIR /case-study

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn build --prod


FROM nginx:alpine

COPY --from=build /case-study/dist/apps/next-trip/ /var/www/next-trip/
COPY ./docker/next-trip/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
