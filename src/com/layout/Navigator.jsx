import { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

class Navigator extends Component {
    render() {
        const {
            to,
            location: {
                pathname
            },
            children,
        } = this.props;
        return (<NavLink className={to===pathname ? "activated" : null} to={to}>{children}</NavLink>);
    }
}

export default withRouter(Navigator);