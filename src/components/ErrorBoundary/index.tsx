import { Props, State } from "components/errorBoundary/interfaces";
import { ErrorTitle } from "components/errorBoundary/styled";
import { Component, ErrorInfo } from "react";

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
