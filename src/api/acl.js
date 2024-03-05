import request from "./request";
// resource
export const CreateResource = (data) => {
  return request({
    url: "/v1/permission/create",
    method: "post",
    data: {
      ...data,
      desc: data.desc || "",
      attribute: "{}",
    },
  });
};

export const test = () => {};

export const UpdateResource = (data) => {
  return request({
    url: "/v1/list",
    method: "get",
    data,
  });
};
export const GetResources = (data) => {
  return request({
    url: "/v1/permission/getList",
    method: "post",
    data,
  });
};
export const DeleteResource = (query) => {
  return request({
    url: "/v1/list",
    method: "get",
    query,
  });
};

export const GetUserList = (data) => {
  const { Page, PageSize, ...rest } = data;
  return request({
    url: "/v1/user/getList",
    method: "post",
    data: {
      ...rest,
      offset: data.Page - 1 || 0,
      limit: data.PageSize || 10,
    },
  });
};

export const GetUser = (data) => {
  return request({
    url: "/v1/user/get",
    method: "post",
    data,
  });
};

export const CreateUser = (data) => {
  return request({
    url: "/v1/user/create",
    method: "post",
    data: {
      ...data,
      status: 0,
    },
  });
};
export const UpdateUser = (data) => {
  return request({
    url: "/v1/user/update",
    method: "post",
    data,
  });
};

export const DeleteUser = (data) => {
  return request({
    url: "/v1/user/delete",
    method: "post",
    data,
  });
};

export const GetRoleList = (data) => {
  return request({
    url: "/v1/role/getList",
    method: "post",
    data,
  });
};

export const CreateRole = (data) => {
  return request({
    url: "/v1/role/create",
    method: "post",
    data,
  });
};
