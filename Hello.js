import { Component } from './Component.js'

export class HelloWorld extends Component {
    propTypes = {
        name: { type: "string", enum: ["world", "you", "me"] },
    };

    render() {
        return React.createElement("div", { toWhat: { name: this.props.name } }, [
            "Hello {{toWhat.name}}",
        ]);
    }
}