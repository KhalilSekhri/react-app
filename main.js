import { type_check } from './check/type_check.js'
import { getUserRamdom } from './api.js'

//Api Fetch
//1er soluce
const URL = "https://randomuser.me/api/";
const main = document.getElementById("root");
const p = document.createElement('p');
main.appendChild(p);
p.append("Loading...");
fetch(URL)
    .then((response) => response.json())
    .then((people) => main.innerHTML = getFullName(people.results[0].name));

const getFullName = (user) => {
    return `<p>${user.title} ${user.first} ${user.last}</p>`
};

//2e soluce
getUserRamdom();
let ReactDOM = {
    render(element, container) {
        container.appendChild(element);
    },
};

let React = {
    createElement(tagOrComponent, props, children) {
        let element;
        if (tagOrComponent === "div") {
            element = document.createElement(tagOrComponent);
            for (let attribute in props) {
                element.setAttribute(attribute, props[attribute]);
            }
            for (let subElement of children) {
                if (typeof subElement === "string")
                    subElement = document.createTextNode(
                        subElement /**.interpolate(props) */
                    );
                element.appendChild(subElement);
            }
        } /** component **/ else {
            if (!type_check(props, tagOrComponent.propTypes)) throw new TypeError();
            return tagOrComponent.display(props);
        }

        return element;
    },
};

class Component {
    state = {};
    constructor(props) {
        this.props = props;
    }
    display(props) {
        //...
        return this.render();
    }
    render() { }
}

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

class Router extends Component {
    state = {
        path: "/home",
    };

    propTypes = {}

    render() {
        return React.createElement("div", {}, [
            React.createElement(
                "button",
                { onClick: () => this.setState({ path: "/home" }) },
                ["Home"]
            ),
            React.createElement(
                "button",
                { onClick: () => this.setState({ path: "/about" }) },
                ["About"]
            ),
            path === "/home" && React.createElement(Home),
            path === "/about" && React.createElement(About),
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
    React.createElement("div", { toWhat: { name: "World" } }, [
        "Hello {{toWhat.name}}",
        React.createElement(HelloWorld, { name: "world" }),
        React.createElement(Counter, { defaultValue: 10 }),
        React.createElement(Counter, { defaultValue: 0 }),
    ]),
    document.getElementById("root")
);


  //<=>
  //<div>
  //  Hello World
  //  <div>
  //    Hello World
  //  </div>
  //  <div>
  //    <button>Add</button>
  //    <span>10</span>
  //  </div>
  //  <div>
  //  <button>Add</button>
  //    <span>0</span>
  //  </div>
  //</div>

  //I] Pros : generation, Cons: Update
  //  React.createElement => DomElement
  //  Component.render => DomElement
  //  ReactDOM.render => rootElement.appendChild(DomElement);
  //