import React, {Component} from 'react'
import {Animated} from "react-animated-css";


const nonEmptyField = (value) => {
    if(!value)
        return 'Поле должно быть заполнено.';
    if(value.length < 6)
        return 'Описание должно быть длиннее 6 символов.';
    if(value.length > 1000)
        return 'Описание не должно быть длиннее 1000 символов.';
    return false;
}


export class Input extends Component {
    state = {
        value: "",
        valid: true,
        error: "",
    }

    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.validate = this.validate.bind(this);
        this.hideError = this.hideError.bind(this);
    }

    isValid() {
        // this.validate();
        if(!!this.props.validator) {
            return this.props.validator(this.state.value) === false;
        } else {
            return true;
        }
    }

    value() {
        return this.state.value;
    }

    onTextChanged(event) {
        this.props.onChange && this.props.onChange(event.target.value);
        this.setState({ value: event.target.value });
    }

    hideError() {
        this.setState({valid: true})
    }

    validate() {
        let validator = !!this.props.validator ? this.props.validator : nonEmptyField

        this.setState(state => {
            let output = validator(state.value)
            return {...state, valid: output === false, error: (output === false) ? state.error : output}
        })
    }

    render() {
        const {
            type="text",
            name,
            title,
        } = this.props;
        const {
            value,
            valid,
            error,
        } = this.state;
        console.log("valid", name, valid)
        return (<div className="input__container">
            <input type={type} id={name} placeholder={title} value={value} onFocus={this.hideError} onBlur={this.validate} onChange={this.onTextChanged}/>
            <label htmlFor={name}>{title}</label>
            <Animated
                className="input__error__container"
                animationInDelay={0}
                animationInDuration={250}
                animationOutDuration={250}
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={!valid}>
                <div className="input__error"><span>{error}</span></div>
            </Animated>
        </div>);
    }
}

export class TextArea extends Component {
    state = {
        value: "",
        valid: true,
        error: "",
    }

    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.validate = this.validate.bind(this);
        this.hideError = this.hideError.bind(this);
    }

    hideError() {
        this.setState({valid: true})
    }

    isValid() {
        // this.validate();
        if(!!this.props.validator) {
            return this.props.validator(this.state.value) === false;
        } else {
            return true;
        }
    }

    value() {
        return this.state.value;
    }

    validate() {
        let validator = !!this.props.validator ? this.props.validator : nonEmptyField

        this.setState(state => {
            let output = validator(state.value)
            return {...state, valid: output === false, error: (output === false) ? state.error : output}
        })
    }

    onTextChanged(event) {
        this.props.onChange && this.props.onChange(event.target.value);
        this.setState({ value: event.target.value });
    }

    render() {
        const {
            type="text",
            name,
            title,
        } = this.props;
        const {
            value,
            valid,
            error,
        } = this.state;
        console.log("valid", name, valid)
        return (<div className="input__container">
            <textarea type={type} id={name} placeholder={title} value={value} onFocus={this.hideError} onBlur={this.validate} onChange={this.onTextChanged}/>
            <label htmlFor={name}>{title}</label>
            <Animated
                className="input__error__container"
                animationInDelay={0}
                animationInDuration={250}
                animationOutDuration={250}
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={!valid}>
                <div className="input__error"><span>{error}</span></div>
            </Animated>
        </div>);
    }
}

export class Select extends Component {
    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.onSelectChanged = this.onSelectChanged.bind(this);
        this.onFocused = this.onFocused.bind(this);
        this.onUnfocused = this.onUnfocused.bind(this);
        this.calcelFocus = this.calcelFocus.bind(this);
        this.inputRef = React.createRef();

        this.state = {
            selected: null,
            listOpened: false,
            value: !!props.value ? props.value : "",
        }
    }

    isValid() {
        return true;
    }

    validate() {
        let validator = !!this.props.validator ? this.props.validator : nonEmptyField

        this.setState(state => {
            let output = validator(state.value)
            return {...state, valid: output === false, error: (output === false) ? state.error : output}
        })
    }

    onTextChanged(event) {
        this.props.onChange && this.props.onChange(event.target.value);
        this.setState({ value: event.target.value });
    }

    onSelectChanged(event) {
        console.log(event);
        const selectedIndex = event.target.attributes.index.nodeValue;
        const {
            onSelect,
            items,
        } = this.props;
        if(selectedIndex !== null) {
            event.stopPropagation();
            this.setState({
                selected: selectedIndex,
                listOpened: false,
                value: items[selectedIndex],
            });
            if(onSelect) onSelect(selectedIndex, items[selectedIndex]);
        }
    }

    onFocused(event) {
        event.stopPropagation();
        this.setState({ listOpened: true });
    }

    onUnfocused(event) {
        let target = event.nativeEvent.explicitOriginalTarget;
        let cancelFocus = false;
        while(target && target.nodeName === '#text') {
            target = target.parentNode;
        }
        while(target) {
            if(target.nodeName === 'DIV' && target.classList.contains('input__container__select')) {
                cancelFocus = true;
                break;
            } else {
                target = target.parentNode;
                console.log(target);
            }
        }
        if(cancelFocus) {
            event.target.focus();
        } else {
            this.setState({ listOpened: false });
        }
        event.stopPropagation();
    }

    calcelFocus(event) {
        event.stopPropagation();
        this.inputRef.current.focus();
    }

    render() {
        const {
            name,
            title,
            items,
        } = this.props;
        const {
            // selected,
            listOpened,
            value
        } = this.state;
        console.log("valid", name, true)
        return (<div className="input__container select" onFocus={this.onFocused} onBlur={this.onUnfocused}>
            <input ref={this.inputRef} type="text" id={name} placeholder={title} value={value} onChange={this.onTextChanged}/>
            {Array.isArray(items) && <div className={`input__container__select${items && listOpened?' active':''}`} onClick={this.calcelFocus}>
                {items.map((element,id) => <span key={id} index={id} onClick={this.onSelectChanged}>{element}</span>)}
            </div>}
            <label htmlFor={name}>{title}</label>
        </div>)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.items !== this.props.items) {
            this.setState({value: '', selected: null});
        }
    }
}
