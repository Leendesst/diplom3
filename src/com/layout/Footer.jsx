import React, { Component } from "react";

// MEDIA

import vk_icon from '../../img/footer/vk.svg'
import watsapp from '../../img/footer/watsapp.svg'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.mapref = React.createRef();
    }
    render() {
        return (<footer className="app-footer">
            <div className="app-footer__social">
                Мы в соцсетях:
                <ol>
                    <li><a target="_blank" rel="noreferrer" href="https://vk.com/ck_service_ptz"><img src={vk_icon} alt="VK" /></a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=79110502929"><img src={watsapp} alt="WatsApp" /></a></li>
                </ol>
            </div>
            <a className="app-footer__phone" href="tel:+79110502929">+79110502929</a>
        </footer>);
    }
}

export default Footer;