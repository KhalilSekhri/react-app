import { Component } from './Component.js'

export class HelloWorld extends Component {
    propTypes = {
        name: { type: "string", enum: ["world", "you", "me"] },
    };

    render() {
        return React.createElement("div", { name: this.props.name }, [
            "Hello {{name}}",
        ]);
    }
}