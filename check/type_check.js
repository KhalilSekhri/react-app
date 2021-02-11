export function type_check_v1(variable, type) {
    const typeOfVariable = typeof variable;

    switch (typeOfVariable) {
        case "object":
            switch (type) {
                case "null":
                    return variable === null;
                case "array":
                    return Array.isArray(variable);
                case "object":
                    return variable !== null && !Array.isArray(variable);
                default:
                    return false;
            }
        default:
            return typeOfVariable === type;
    }
}

export function type_check_v2(variable, conf) {
    for (let key in conf) {
        switch (key) {
            case 'type':
                if (!type_check_v1(variable, conf.type)) return false;
                break;
            case 'value':
                if (JSON.stringify(variable) !== JSON.stringify(conf.value)) return false;
                break;
            case 'enum':
                let found = false;
                for (subValue of conf.enum) {
                    if (type_check_v2(variable, { value: subValue })) {
                        found = true;
                        break;
                    }
                }
                if (!found) return false;
        }
    }
    return true;
}

export function type_check(arg, types) {
    let isChecked = type_check_v2(arg, types);
    console.log(arg, types);
    if (!types.properties) return isChecked;
    for (const typeKey in types.properties) {
        isChecked = type_check(
            type_check_v1(arg, "object") ? arg[typeKey] : arg,
            types.properties[typeKey]
        );
        if (!isChecked) break;
    }
    return isChecked;
}