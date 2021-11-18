import request from "./request";
// login
export const Login = (data) => {
  return request({
    url: "/v1/signIn",
    method: "post",
    data,
  });
};
