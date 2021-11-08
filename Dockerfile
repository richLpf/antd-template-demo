FROM nginx:1.19.1

WORKDIR /data

ADD build build

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx"]