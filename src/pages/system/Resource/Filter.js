function Filter() {
  const filters = [
    {
      label: "资源名称",
      key: "Name",
      type: "Input",
      span: 8,
    },
    {
      label: "资源标识",
      key: "Resource",
      type: "Input",
      span: 8,
    },
  ];

  return filters;
}

export default Filter;
