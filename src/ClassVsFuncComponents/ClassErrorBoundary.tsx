import React from "react";

interface Props {
  children: string;
}

interface State {
  hasError: boolean;
}

class ClassErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: true };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI if an error occurs
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ClassErrorBoundary;
