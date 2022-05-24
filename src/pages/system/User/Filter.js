function Filter({ roleList }) {
  const filters = [
    {
      label: "英文名",
      key: "Name",
      type: "Input",
      span: 8,
    },
    {
      label: "角色",
      key: "RoleID",
      type: "Select",
      // type: "SelectMultiple",
      options: roleList.map((item) => ({
        label: item.Name,
        value: item.ID,
      })),
      span: 8,
    },
    {
      label: "用户ID",
      key: "UserID",
      type: "Input",
      span: 8,
    },
  ];

  return filters;
}

export default Filter;
