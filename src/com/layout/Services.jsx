import { Component } from 'react'
import { Animated } from "react-animated-css";
import LoadingError from './LoadingError';
import BBCode from "./BBCode";

class Service extends Component {
    render() {
        const {
            title = null,
            text = null,
            image = null,
        } = this.props;
        console.log(this.props);
        return (<>
            {!!image && <div className="services__item__image"><img src={image} alt=" "/></div>}
            <div className="services__item__content">
                <h2>{title}</h2>
                <p><BBCode code={text} /></p>
            </div>
        </>);
    }
}

class Services extends Component {
    render() {
        const {
            items = {},
            loading = true,
            error = false,
        } = this.props;
        const haveItems = Object.entries(items).length > 0;
        return (
            <div className="services">
                {loading && (<LoadingError>Загрузка...</LoadingError>)}
                {!loading && haveItems && (!error ?
                    Object.entries(items).map( ([key,{title, text, image}], id) =>
                        <Animated
                            className="services__item"
                            key={id}
                            animationInDelay={id*100}
                            animationInDuration={500}
                            animationIn="fadeInUp"
                            isVisible={true}
                        > 
                            <Service title={title} text={text} image={image} />
                        </Animated>
                    ) : <LoadingError error>Не удалось загрузить контент</LoadingError>)
                }
                {!loading && !haveItems && (<LoadingError>Тут еще ничего нет</LoadingError>)}
            </div>
        );
    }
}

export default Services;
