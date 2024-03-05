import { message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const config = {};
// if (process.env.REACT_APP_ENV !== "development") {
config.baseURL = process.env.REACT_APP_API_URL;
// }

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
        const jwtToken = Cookies.get("jwtToken");
        if (jwtToken) {
          config.headers.Authorization = jwtToken;
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
        return reject(err.message);
      }
    );

    instance(params)
      .then((res) => {
        const {
          data: { code, message: Message },
          data,
        } = res;
        if (code === 10000) {
          message.error("请登陆");
          window.location.replace("/login");
          return;
        } else if (code !== 0) {
          message.error(Message);
          resolve(data);
        } else {
          resolve({
            ...data,
            RetCode: data.code || data.status,
            Data: data.data,
            Message: data.message,
            Total: data.count,
          });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default request;
