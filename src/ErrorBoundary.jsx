import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("❌ ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "2rem",
          textAlign: "center",
          background: "#ffe5e5",
          color: "#a00000",
          borderRadius: "12px",
          marginTop: "2rem"
        }}>
          <h2>Something went wrong 😔</h2>
          <p>Don't worry, our team has been notified.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
