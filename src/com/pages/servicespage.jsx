import { Component } from 'react';
import { connect } from 'react-redux';

import { servicesLoadedAppend } from '../../redux/services-reducer';
import { LOAD_SERVICES_NAME } from '../../redux/lindicator-reducer';

import API from '../../api/API';
import Services from '../layout/Services';

class ServicesPage extends Component {
    state = {
        itemsRef: {}, // TODO Динамическое анимирование
        itemsState: {}, // TODO Тоже самое что и описано выше
        loadingError: false,
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        // TODO Автоматические управление загруженым контентом
    }
    componentDidMount() {
        const {
            services: {
                loading,
                data
            }
        } = this.props;
        if(!loading && Object.keys(data).length < 1) {
            this.setState({loadingError: false});
            API.loadServices().then(res => {
                let output = {}
                res.data.forEach(o => {
                    output[o.id] = o;
                });
                this.props.servicesLoadedAppend(output);
            }).catch(e => {
                this.setState({loadingError: true});
            });
        }
    }
    render() {
        const {
            services: {
                data = {},
            },
            indicators: {
                [LOAD_SERVICES_NAME]: loading = false
            }
        } = this.props;
        const {
            loadingError
        } = this.state;
        return (<>
            <Services items={data} loading={loading} error={loadingError}/>
        </>);
    }
}


const mapStateToProps = state => ({
    services: state.services,
    indicators: state.indicators.falgs,
});

const mapDispatchToProps = dispatch => ({
    servicesLoadedAppend: works => dispatch(servicesLoadedAppend(works)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage);
