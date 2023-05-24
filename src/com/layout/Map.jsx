import { Component } from 'react'
import { load } from '@2gis/mapgl';

class DGMap extends Component {
    componentDidMount() {
        let map;
        load().then((mapglAPI) => {
            // container — id of the div element in your html
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: '55150fbf-4447-4cf6-bf23-480250293786',
            });
        });
    }
    render() {
        return (<div id="map-container" style={{ width: '100%', height: '100%' }}></div>);
    }
}

export default DGMap;
