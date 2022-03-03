############################  BUILD  ##############################
## Bundle file build
FROM node:16.14.0-buster as build

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN rm -rf node_modules && yarn install --frozen-lockfile
COPY . .

## Transform all the js/html/css file in one
RUN npm run build
###################################################################3


################################ PROD ####################################
# NGINX Web Server
FROM nginx:1.21.6-alpine as prod

## /usr/share/nginx/html is the default location for nginx serve files
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

## Command that will be runned when i say "docker run"
CMD ["nginx", "-g", "daemon off;"]
##########################################################################


