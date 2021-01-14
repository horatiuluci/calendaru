# Stage 0: compile angular frontend
FROM node:latest as build
WORKDIR /src/
COPY . .
RUN npm install
RUN npm install -g @angular/cli
CMD ["ng", "serve"]

# Stage 1: serve app with nginx server

# FROM nginx:latest
# COPY --from=build /src/dist/security-app  /usr/share/nginx/html
# COPY /src/nginx.config /etc/nginx/conf.d/default.conf
EXPOSE 4200 4200
