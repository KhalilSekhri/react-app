import * as api from './api.js'
import { HelloWorld } from './Hello.js'
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

ReactDOM.render(
    React.createElement("div", { name: "World" }, [
        "Hello {{name}}",
        React.createElement(HelloWorld, { name: "Toto" },)
    ]),
    document.getElementById("root")
);