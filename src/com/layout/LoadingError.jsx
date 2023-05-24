import { Component } from "react";

class LoadingError extends Component {
    render() {
        const {
            children,
            error = false,
        } = this.props;
        return (<div className={`loading__message${error?' error':''}`}><span>{children}</span></div>);
    }
}

export default LoadingError;
