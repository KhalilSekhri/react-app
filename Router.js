import { Component } from './Component.js'

export class Router extends Component {
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
            /* path === "/about" && React.createElement(About), */
        ]);
    }
}