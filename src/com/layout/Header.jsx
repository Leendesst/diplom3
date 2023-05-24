import { Component } from "react";
import { NavLink } from "react-router-dom"
import Navigator from "./Navigator"
import logo from '../../img/header/logo.png'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    toggleMenu() {
        this.setState(state => {
            return {...state, openMenu: !state.openMenu};
        });
    }

    hideMenu() {
        this.setState({openMenu: false});
    }

    render() {
        const {
            openMenu
        } = this.state;
        return (<header className="app-header">
            <div className="app-header__wrapper">
                <div className="app-header__logo"><NavLink to="/works"><img src={logo} alt="logo"/></NavLink></div>
                <button className={"app-header__menu__button"+(openMenu?' activated':'')} onClick={this.toggleMenu}><span /><span /><span /></button>
                <nav className={"app-header__menu"+(openMenu?' activated':'')} onClick={this.hideMenu}>
                    <Navigator to="/works"><span>Наши работы</span></Navigator>
                    <Navigator to="/services"><span>Услуги</span></Navigator>
                    <Navigator to="/request"><span>Записаться</span></Navigator>
                    <Navigator to="/about"><span>О нас</span></Navigator>
                </nav>
            </div>
        </header>);
    }
}

export default Header;
