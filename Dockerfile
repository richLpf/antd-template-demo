FROM node:12.13.0 as builder

WORKDIR /data/front

COPY . .

RUN cat /etc/hosts

# RUN npm install @ucloud/ucloud-icons --registry=http://registry.npm.pre.ucloudadmin.com --no-package-lock --no-save

RUN npm cache clean --force

RUN npm install --no-optional --registry=https://registry.npm.taobao.org --no-package-lock --no-save

RUN yarn build




FROM nginx:alpine as front

RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone 

WORKDIR /data/front

COPY ./nginx /etc/nginx/conf.d

COPY  --from=builder /data/front/build /data/front

EXPOSE 80