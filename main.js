import { type_check } from './check/type_check.js'
import * as api from './api.js'
import { Component } from './Component.js'
import { HelloWorld } from './Hello.js'
import { Router } from './Router.js'
import './function/helpers.js'
import * as dom from './dom.js'

const createElement = dom.createElement;
const render = dom.render

window.React = {
    createElement,
}

window.ReactDOM = {
    render,
}

api.getUserRamdom();
/* api.apiNoAsync(); */

class Counter extends Component {
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

ReactDOM.render(
    React.createElement("div", { name: "World" }, [
        "Hello {{name}}",
    ]),
    document.getElementById("root")
);