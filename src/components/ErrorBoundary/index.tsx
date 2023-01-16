import { Component, ErrorInfo } from "react";
import { Props, State } from "components/errorBoundary/types";
import { ErrorTitle } from "components/errorBoundary/styled";

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorTitle>"Sorry.. there was an error"</ErrorTitle>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
