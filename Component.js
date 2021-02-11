import { type_check, type_check_v2 } from "./check/type_check.js";

export class Component {
    state = {};
    prevState = {};

    view = '';
    properties = '';

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
        this.state = data;
    }

    setState(state) {
        this.state = state;
    }

    display(newProps) {
        if (newProps) {
            if (!type_check(newProps, this.propTypes)) {
                throw new Error("Il y a une erreur");
            }
        }
        if (this.shouldUpdate(newProps)) {
            return this.render();
        }
    }

    shouldUpdate(newProps) {
        if (newProps !== this.props) {
            this.props = newProps;
            return true;
        }
        return false;
    }

    render() {
        this.view = this.view.interpolate(this.props);
    }

}