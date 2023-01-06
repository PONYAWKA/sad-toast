import { node } from "prop-types";
import React from "react";

import { Wrapper } from "./styles";

class ErrorBoundary extends React.Component {
  stateError = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { children } = this.props;

    if (this.stateError.error) {
      return <Wrapper>Something broke</Wrapper>;
    }
    return children;
  }
}

ErrorBoundary.PropType = {
  children: node,
};

export default ErrorBoundary;
