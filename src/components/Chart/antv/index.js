import React, { useCallback, useEffect, useRef } from "react";
import { Line, Liquid } from "@antv/g2plot";
import PropTypes from "prop-types";
function Chart(props) {
  const { style, options, type = "Line" } = props;

  const container = useRef();

  const renderOptions = useCallback(
    (options) => ({
      smooth: true,
      xField: "date",
      yField: "value",
      ...options,
    }),
    []
  );

  useEffect(() => {
    if (container.current) {
      let chatItem = null;
      switch (type) {
        case "Liquid":
          chatItem = new Liquid(container.current, renderOptions(options));
          break;
        default:
          chatItem = new Line(container.current, renderOptions(options));
      }
      chatItem.render();
    }
  }, [renderOptions, container, options, type]);

  return <div style={style} ref={container}></div>;
}

Chart.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object,
  type: PropTypes.string,
};

export default React.memo(Chart);
