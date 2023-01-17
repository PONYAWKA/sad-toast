import { Component, ErrorInfo } from "react";

import { Props, State } from "@/components/ErrorBoundary/interfaces";
import { ErrorTitle } from "@/components/ErrorBoundary/styled";

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorTitle>Sorry.. there was an error</ErrorTitle>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
