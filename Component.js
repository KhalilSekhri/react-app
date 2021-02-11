import { type_check_v2 } from "./check/type_check.js";

export class Component {
    state = {};
    prevState = {};

    constructor(props) {
        this.props = props;
    }

    get state() {
        return this.state;
    }

    set state(value) {
        this.state = { ...value }
    }

    receiveData(data) {

    }

    setState(state) {

    }

    shouldUpdate(newProps) {
        if (newProps !== this.props) {
            this.props = newProps;
            return true;
        }
        return false;
    }

    display(props) {
        //...
        return this.render();
    }
    render() { }
}