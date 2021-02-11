import { Component } from './Component.js'

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.defaultValue || 0,
        };
    }

    propTypes = {
        defaultValue: { type: "number" },
    };

    render() {
        return React.createElement("div", {}, [
            React.createElement(
                "button",
                { onClick: () => this.setState({ counter: this.state.counter + 1 }) },
                ["Add"]
            ),
            React.createElement("span", { title: this.state.counter }, ["{{title}}"]),
        ]);
    }
}