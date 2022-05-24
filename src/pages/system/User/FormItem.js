export const itemOption = ({ roleList }) => [
  {
    name: "Name",
    label: "英文名",
    content: "Input",
    rules: {
      required: true,
    },
  },
  {
    name: "ChName",
    label: "中文名",
    content: "Input",
    rules: {
      required: true,
    },
  },
  {
    name: "Phone",
    label: "电话号码",
    content: "Input",
    rules: {
      required: true,
    },
  },
  {
    name: "RoleID",
    label: "角色",
    rules: {
      required: true,
    },
    content: "Select",
    placeholder: "请选择",
    option: {
      required: true,
      list: roleList,
      label: "Name",
      value: "ID",
    },
    allowClear: true,
    mode: "multiple",
  },
];
