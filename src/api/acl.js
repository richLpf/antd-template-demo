import request from "./request";
// resource
export const CreateResource = (data) => {
  return request({
    url: "/v1/signIn",
    method: "post",
    data,
  });
};

export const test = () => {};

export const UpdateResource = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query,
  });
};
export const GetResources = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query,
  });
};
export const DeleteResource = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query,
  });
};

export const GetUserList = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query,
  });
};
export const CreateUser = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query,
  });
};
export const UpdateUser = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query,
  });
};
export const DeleteUser = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query,
  });
};

export const GetRoleList = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query,
  });
};
