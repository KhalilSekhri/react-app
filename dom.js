export const render = function (element, container) {
    container.appendChild(element);
}


export const createElement = function (tagOrComponent, props, children) {
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
};