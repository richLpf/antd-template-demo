import request from "./request";
// login
export const Login = (data) => {
  return request({
    url: "/v1/user/login",
    method: "post",
    data,
  });
};

// register
export const register = (data) => {
  return request({
    url: "/v1/user/create",
    method: "post",
    data,
  });
};

// mock table api
export const GetList = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query,
  });
};
