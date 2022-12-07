import React from "react";
import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";

import AuthLayout from "../Pages/_layouts/auth";
import DefaultLayout from "../Pages/_layouts/default";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Navigate to="/" />;
  }

  if (signed && !isPrivate) {
    return <Navigate to="/dashbord" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
