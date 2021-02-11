import { type_check } from './check/type_check.js'
import { getUserRamdom } from './api.js'
import { Component } from './Component.js'
import { Router } from './Router.js'
import { } from './function/helpers.js'

//Api Fetch
//1er soluce
const URL = "https://randomuser.me/api/";
const api = document.getElementById("api");
const p = document.createElement('p');
api.appendChild(p);
p.append("Loading...");
fetch(URL)
    .then((response) => response.json())
    .then((people) => api.innerHTML = getFullName(people.results[0].name));

const getFullName = (user) => {
    return `<p>${user.title} ${user.first} ${user.last}</p>`
};

//2e soluce
getUserRamdom();

let ReactDOM = {
    render(element, container) {
        container.appendChild(element);
    }
};

let React = {
    createElement(tagOrComponent, props, children) {
        let element;
        if (tagOrComponent === "div") {
            element = document.createElement(tagOrComponent);
            console.log(props);
            for (let attribute in props) {
                element.setAttribute(attribute, props[attribute]);
            }
            for (let subElement of children) {
                if (typeof subElement === "string")
                    subElement = document.createTextNode(
                        subElement.interpolate(props)
                    );
                element.appendChild(subElement);
            }
        } else {
            if (!type_check(props, tagOrComponent.propTypes)) throw new TypeError();
            return tagOrComponent.display(props);
        }
        return element;
    },
};

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

class HelloWorld extends Component {
    propTypes = {
        name: { type: "string", enum: ["world", "you", "me"] },
    };

    render() {
        return React.createElement("div", { toWhat: { name: this.props.name } }, [
            "Hello {{toWhat.name}}",
        ]);
    }
}

ReactDOM.render(
    React.createElement("div", { name: "World" }, [
        "Hello {{name}}",
    ]),
    document.getElementById("root")
);