import { message } from "antd";
import axios from "axios";
// import { clearStorage, getStorage } from "src/storages"

const config = {};
if (process.env.REACT_APP_ENV !== "development") {
  config.baseURL = process.env.REACT_APP_API;
}

const userInfo = {
  username: "user",
  token: "123456",
};

function request(params) {
  return new Promise((resolve, reject) => {
    const instance = axios.create(
      Object.assign(
        {
          withCredentials: false,
          "content-type": "application/json",
          timeout: 30000,
        },
        config
      )
    );

    instance.interceptors.request.use(
      (config) => {
        if (userInfo.token) {
          config.headers.token = userInfo.token;
        }
        if (userInfo.username) {
          config.headers.remote_user = userInfo.username;
        }
        return config;
      },
      (err) => {
        return reject(err);
      }
    );

    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return reject(err);
      }
    );

    instance(params)
      .then((res) => {
        const {
          data: { RetCode, Message },
          data,
        } = res;
        if (RetCode === 10000) {
          message.error("请登陆");
          window.location.replace("/login");
          return;
        } else if (RetCode !== 0) {
          const log = {
            request: params,
            response: data,
          };
          console.error(log);
          message.error(Message);
          resolve(data);
        } else {
          resolve(data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default request;
