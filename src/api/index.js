import request from "./request";
// login
export const Login = (data) => {
  return request({
    url: "/v1/signIn",
    method: "post",
    data,
  });
};

// mock table api
export const GetList = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query
  })
}