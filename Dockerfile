FROM node:12-alpine as builder

WORKDIR /data/front

COPY . .

RUN cat /etc/hosts

# RUN npm install @ucloud/ucloud-icons --registry=http://registry.npm.pre.ucloudadmin.com --no-package-lock --no-save

RUN npm install --registry=https://registry.npm.taobao.org --no-package-lock --no-save

RUN yarn build




FROM nginx:alpine as front

RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone 

WORKDIR /data/front

COPY ./nginx /etc/nginx/conf.d

COPY  --from=builder /data/front/build /data/front

EXPOSE 80