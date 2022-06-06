import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";

function Box(props) {
  const { title, rightExtra, content, size, ...rest } = props;

  return (
    <Card
      style={{ height: "100%", borderRadius: "4px" }}
      title={title}
      extra={rightExtra}
      size={size}
      {...rest}
    >
      {content}
    </Card>
  );
}

Box.propTypes = {
  title: PropTypes.string,
  rightExtra: PropTypes.string,
  content: PropTypes.any,
  size: PropTypes.oneOf(["small", "default"]),
};

export default Box;
