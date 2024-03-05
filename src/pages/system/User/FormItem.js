export const itemOption = ({ roleList, editInfo }) => [
  {
    name: "name",
    label: "英文名",
    content: "Input",
    rules: {
      required: true,
    },
  },
  {
    name: "username",
    label: "中文名",
    content: "Input",
    rules: {
      required: true,
    },
  },
  {
    name: "password",
    label: "密码",
    content: "Input",
    rules: {
      required: editInfo && Object.keys(editInfo).length ? false : true,
    },
  },
  {
    name: "role_ids",
    label: "角色",
    rules: {
      required: true,
    },
    content: "Select",
    placeholder: "请选择",
    option: {
      required: true,
      list: roleList,
      label: "name",
      value: "id",
    },
    allowClear: true,
    mode: "multiple",
  },
];
