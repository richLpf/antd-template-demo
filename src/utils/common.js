/*
 * @Author: pengfei.lv
 * @LastModifiedBy: pengfei.lv
 * @LastEditTime: 2021-11-09 10:55:15
 * @LastEditors: pengfei.lv
 * @Description:
 */

// menu has child
export const hasChild = (routes) => {
  return Array.isArray(routes.children) && routes.children.length > 0;
};
