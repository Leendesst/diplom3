import React, {Component} from 'react';

export default class Button extends Component {
    render() {
        const {
            children,
            onClick,
            enabled = true
        } = this.props;
        console.log("enabled", enabled);
        return (<button className="button" disabled={!enabled} onClick={enabled ? onClick : null}>{children}</button>);
    }
}