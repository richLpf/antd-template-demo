import React from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";

function Demo1(props) {
  const { options, series } = props;

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" />
        </div>
      </div>
    </div>
  );
}

Demo1.propTypes = {
  options: PropTypes.object,
  series: PropTypes.array,
};

export default Demo1;
