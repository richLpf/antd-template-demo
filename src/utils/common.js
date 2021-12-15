// menu has child
export const hasChild = (routes) => {
  return Array.isArray(routes.children) && routes.children.length > 0;
};
