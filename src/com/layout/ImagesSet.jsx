import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

export default class ImagesSet extends Component {
    state = {};
    render() {
        return (<ImageGallery
            items={this.props.images.map(img => {
                return {original: img, thumbnail:img};
            })}
        />);
    }
}