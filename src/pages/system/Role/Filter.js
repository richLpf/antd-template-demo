function Filter() {
  const filters = [
    {
      label: "名称",
      key: "Name",
      type: "Input",
      span: 8,
    },
    {
      label: "资源标识",
      key: "Role",
      type: "Input",
      span: 8,
    },
  ];

  return filters;
}

export default Filter;
