import { Component } from 'react'
import BBCode from './BBCode';
import LoadingError from './LoadingError';
import { Animated } from "react-animated-css";

class Work extends Component {
    render() {
        const {
            title,
            text,
            date
        } = this.props;
        return (<>
            <div className="works__item__head">
                <span className="works__item__head__title">{title}</span>
                <span className="works__item__head__date">{date}</span>
            </div>
            <div className="works__item__body">
                <BBCode code={text} />
            </div>
        </>);
    }
}

class Works extends Component {
    render() {
        const {
            items = {},
            loading = true,
            error = false,
        } = this.props;
        const haveItems = Object.entries(items).length > 0;
        return (
            <div className="works">
                {loading && (<LoadingError>Загрузка...</LoadingError>)}
                {!loading && haveItems && (!error ?
                    Object.entries(items).map(([key,{title,text,date}], id) => {
                        return (
                            <Animated
                                className="works__item"
                                key={key}
                                animationInDelay={id*100}
                                animationInDuration={500}
                                animationIn="fadeInUp"
                                isVisible={true}
                            >
                                <Work title={title} text={text} date={date}/>
                            </Animated>
                        );
                    }) : <LoadingError error>Не удалось загрузить контент</LoadingError>)
                }
                {!loading && !haveItems && (<LoadingError>Тут еще ничего нет</LoadingError>)}
            </div>
        );
    }
}

export default Works;
