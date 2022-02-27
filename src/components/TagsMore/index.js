import React, { Fragment } from "react";
import { Space, Tag } from "antd";
import PropTypes from "prop-types";

function TagsMore(props) {
  const { list = [] } = props;

  return (
    <Fragment>
      <Space>
        {list?.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </Space>
    </Fragment>
  );
}

TagsMore.defaultProps = {
  list: ["name"],
};

TagsMore.propTypes = {
  list: PropTypes.array,
};

export default TagsMore;
