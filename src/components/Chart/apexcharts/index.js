import React from "react";
import Chart from "react-apexcharts";

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

export default Demo1;
