import { Component } from 'react';
import parser, { Tag } from 'bbcode-to-react';
import ImagesSet from "./ImagesSet";

class BoldTag extends Tag {
    toReact() {
        return (<b>{this.getComponents()}</b>);
    }
}
parser.registerTag('b', BoldTag);

class ItalicTag extends Tag {
    toReact() {
        return (<i>{this.getComponents()}</i>);
    }
}
parser.registerTag('i', ItalicTag);


class ImagesTag extends Tag {
    toReact() {
        const images = this.getContent(true).split("|");
        console.log(images);
        return (<ImagesSet images={images} />);
    }
}
parser.registerTag('images', ImagesTag);


class BrTag extends Tag {
    toReact() {
        return (<br />);
    }
}
parser.registerTag('__br__', BrTag);


class BBCode extends Component {
    render() {
        const {
            code = ''
        } = this.props;
        return (
            <p>{parser.toReact(code.replaceAll('\n', '[__br__][/__br__]'))}</p>
          );
    }
}

export default BBCode;