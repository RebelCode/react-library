import React, { ReactNode } from "react";

type Props = {
  errorContents: ReactNode;
  children?: ReactNode;
};

type State = {
  error: any;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    return this.props.errorContents;
  }
}
