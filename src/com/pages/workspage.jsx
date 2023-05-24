import { Component } from 'react';
import { connect } from 'react-redux';

import { worksLoadedAppend } from '../../redux/works-reducer';
import { LOAD_WORKS_NAME } from '../../redux/lindicator-reducer';

import API from '../../api/API';
import Works from '../layout/Works';


class NewsPage extends Component {
    state = {
        itemsRef: {}, // TODO Динамическое анимирование
        itemsState: {}, // TODO Тоже самое что и описано выше
        loadingError: false,
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        // TODO Автоматические управление загруженым контентом?
    }
    componentDidMount() {
        const {
            works: {
                loading,
                data
            }
        } = this.props;
        if(!loading && Object.keys(data).length < 1) {
            this.setState({loadingError: false});
            API.loadNews().then(res => {
                let output = {}
                res.data.forEach(o => {
                    output[o.id] = o;
                });
                this.props.worksLoadedAppend(output);
            }).catch(e => {
                this.setState({loadingError: true});
                this.props.worksLoadedAppend(null);
            });
        }
    }
    render() {
        const {
            works: {
                data,
            },
            indicators: {
                [LOAD_WORKS_NAME]: loading = false
            }
        } = this.props;
        const {
            loadingError
        } = this.state;
        console.log(data, loading)
        return (<>
            <Works items={{
                1: {
                    date: "2022-05-21 12:00:00",
                    id: 2,
                    text: "Был проделан комплекс по кузовному ремонту.\n" +
                        "Была произведена полная покраска кузова, переварка днища и порогов с последующей обработкой.\n" +
                        "[images]https://ck-service.ru/assets/nFrsI4eksKyY.jpg|https://ck-service.ru/assets/vAT5tdHLk0eO.jpg|https://ck-service.ru/assets/FTQcK79iv3Zl.jpg|https://ck-service.ru/assets/LFaVfmi33zAd.jpg|https://ck-service.ru/assets/5VHFC19VLuyG.jpg|https://ck-service.ru/assets/iBfYdNkDMLe3.jpg|https://ck-service.ru/assets/qvaclKZnhAYn.jpg[/images]",
                    title: "Кузовной ремонт Mercedes W203",
                },
                2: {
                    date: "2022-04-17 12:00:00",
                    id: 1,
                    text: "После небольшого дтп автомобиль был восстановлен в первоначальное состояние за 3 дня.\n" +
                        "Поврежденные элементы были восстановлены, отгрунтованы и покрашены с использованием хороших материалов и качественной продукции.\n" +
                        "[images]https://ck-service.ru/assets/ilnKJzMmD3E.jpg|https://ck-service.ru/assets/rXZjD6ANtgg.jpg|https://ck-service.ru/assets/RHt3iImo7kw.jpg|https://ck-service.ru/assets/oJW3ShoyCBA.jpg|https://ck-service.ru/assets/iqcxhjV_KY4.jpg[/images]",
                    title: "Кузовной ремонт автомобиля Škoda Octavia",
                }
            }} loading={loading} error={loadingError}/>
        </>);
    }
}

const mapStateToProps = state => ({
    works: state.works,
    indicators: state.indicators.falgs,
});

const mapDispatchToProps = dispatch => ({
    worksLoadedAppend: works => dispatch(worksLoadedAppend(works)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
