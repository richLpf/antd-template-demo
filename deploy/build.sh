#!/usr/bin/env bash
set -e

env=$1
APP_NAME=antd-template-demo
DOCKER_HUB=""
DOCKER_HUB_USERNAME=lvpf
DOCKER_HUB_PASSWORD=
tag=1.1.0

function help()
{
        echo "    please load this file to the host you will run uconf"
        echo "    build.sh env"
        echo "    env   : "pre" or "prod""
}

function get_json_value()
{
  local json=$1
  local key=$2

  if [[ -z "$3" ]]; then
    local num=1
  else
    local num=$3
  fi

  local value=$(awk -F"[,:}]" '{for(i=1;i<=NF;i++){echo $NF; if($i~/'${key}'\042/){print $(i+1)}}}' "${json}" | tr -d '"' | sed -n ${num}p)

  version=${value}
}

if [ $# -ne 1 ];then
        help
        exit 1
fi

echo "set dev: " $env

# git pull
path=$(pwd)
echo $path

if [ $env = "pre" ];then
        yarn build:pre
elif [ $env = "prod" ];then
        yarn build:prod
else
        help
        exit 1
fi

# yarn打包
echo "start compiling..."

echo "build finish"

echo $version

app_name=$APP_NAME"-"$env
default_registry=$DOCKER_HUB
default_project=$DOCKER_HUB_USERNAME
default_user=$DOCKER_HUB_USERNAME
default_pwd=$DOCKER_HUB_PASSWORD
dockerfile="./deploy/$env/Dockerfile"
nginx_conf="./deploy/$env/default.conf"

echo $(date "+%Y-%m-%d %H:%M:%S")-开始制作镜像
# amd64可以直接打包，arm64用第二条命令打包
# docker build --rm --build-arg NGINX_CONF=$nginx_conf -t $app_name:latest . 
echo $PWD
# docker build -f ./deploy/$env/Dockerfile --platform linux/amd64 --rm --build-arg NGINX_CONF=$nginx_conf -t $app_name:latest . 
docker build -f ./deploy/$env/Dockerfile --platform linux/arm64 --rm --build-arg NGINX_CONF=$nginx_conf -t $app_name:latest . 
echo $(date "+%Y-%m-%d %H:%M:%S")-镜像制作完成

echo $(date "+%Y-%m-%d %H:%M:%S")-开始打tag
docker tag $app_name:latest $default_project/$app_name\:$tag
# docker tag $app_name:latest $default_registry/$default_project/$app_name\:latest
echo $(date "+%Y-%m-%d %H:%M:%S")-打tag完成

# echo $(date "+%Y-%m-%d %H:%M:%S")-开始push镜像
# docker login -u $default_user -p $default_pwd
# docker push $default_project/$app_name\:$tag
# docker push $default_registry/$default_project/$app_name\:latest
# echo $(date "+%Y-%m-%d %H:%M:%S")-push镜像完成

# echo $(date "+%Y-%m-%d %H:%M:%S")-删除本地镜像
# docker rmi $app_name\:latest
# docker rmi $default_project/$app_name\:$tag

# echo "执行发布脚本请输入tag："
# echo $tag