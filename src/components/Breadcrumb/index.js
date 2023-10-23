import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import routes from "../../router";
import { formatMessage } from "src/utils/common";

const getRoute = (routes, pathname) => {
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].key === pathname) {
      return [routes[i]];
    }
    if (routes[i].children) {
      const findChildren = getRoute(routes[i].children, pathname);
      if (findChildren) {
        return [routes[i], ...findChildren];
      }
    }
  }
};

function UBreadcrumb({ routeChange }) {
  const [paths, setPaths] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (location && location.pathname) {
      setPaths(getRoute(routes, location.pathname) || []);
    }

    routeChange && routeChange(location.pathname);
    // eslint-disable-next-line
  }, [location]);

  return (
    <Breadcrumb className="layout-breadcrumb">
      <Breadcrumb.Item key="/">
        <Link to="/">{formatMessage("DEMO0001")}</Link>
      </Breadcrumb.Item>
      {paths.map((path, index) => (
        <Breadcrumb.Item key={path.key}>
          {path.isDir || index === paths.length - 1 ? (
            path.name
          ) : (
            <Link to={path.key}>{path.name}</Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

UBreadcrumb.propTypes = {
  routeChange: PropTypes.func,
};

export default UBreadcrumb;
