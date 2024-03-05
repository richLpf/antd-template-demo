export const AllPermission = {
  Action: {
    CreateUser: "GetUser",
  },
  Page: {
    Record: "Record",
  },
};

export function keyHasPermission(key, permissions = []) {
  return permissions.findIndex((item) => item.key === key) > -1;
}
