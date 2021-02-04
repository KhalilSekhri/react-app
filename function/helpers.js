String.prototype.ucfirst = function () {
    if (typeof this.valueOf() !== "string" || this.valueOf() === "") return "";
    return this.valueOf().charAt(0).toUpperCase() + this.valueOf().slice(1);
}

String.prototype.capitalize = function () {
    if (typeof this.valueOf() !== "string" || this.valueOf() === "") return "";
    return this.valueOf()
        .split(" ")
        .map((word) => word.toLowerCase().ucfirst())
        .join(" ");
}

String.prototype.camelCase = function () {
    if (typeof this.valueOf() !== "string" || this.valueOf() === "") return "";
    return this.valueOf().capitalize().replace(/\W/g, "");
}

String.prototype.snake_case = function () {
    if (typeof this.valueOf() !== "string" || this.valueOf() === "") return "";
    return this.valueOf().toLowerCase().replace(/\W/g, "_");
}

String.prototype.leet = function () {
    if (typeof this.valueOf() !== "string" || this.valueOf() === "") return "";
    return this.valueOf().replace(/[aeiouy]/gi, function (e) {
        switch (e.toLowerCase()) {
            case "a":
                return 4;
            case "e":
                return 3;
            case "i":
                return 1;
            case "o":
                return 0;
            case "u":
                return "(_)";
            case "y":
                return 7;
        }
    });
}

String.prototype.verlan = function () {
    if (typeof this.valueOf() !== "string" || this.valueOf() === "") return "";
    return this.valueOf()
        .split(" ")
        .map((word) => word.split("").reverse().join(""))
        .join(" ");
}

String.prototype.yoda = function () {
    if (typeof this.valueOf() !== "string" || this.valueOf() === "") return "";
    return this.valueOf().split(" ").reverse().join(" ");
}

String.prototype.vig = function (code) {
    if (typeof this.valueOf() !== "string") return "";
    if (this.valueOf().length === 0) return this.valueOf();

    while (code.length < this.valueOf().length) {
        code += code;
    }
    code = code.substr(0, this.valueOf().length);
    let codeIndex = 0;

    return this.valueOf()
        .split("")
        .map((letter, index) => {
            letter = letter.toLowerCase();
            const aCode = "a".charCodeAt(0);
            const letterNumber = letter.charCodeAt(0) - aCode; // [0-25]

            if (letterNumber < 0 || letterNumber > 25) return letter;

            const codeNumber = code.charCodeAt(codeIndex) - aCode; // [0-25]
            codeIndex++;

            return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
        })
        .join("");
}

Object.prototype.prop_access = function (path) {
    //Check if path different type string
    if (typeof path !== "string") return this.valueOf();
    //Check object is different a type object or object is null
    if (typeof this.valueOf() !== "object" || this.valueOf() === null) return `${path} not exist`;
    //Check path is empty
    if (path === "") return this.valueOf();

    const arrayPath = path.split(".");
    let targetElement = this.valueOf();

    for (let prop of arrayPath) {
        if (!targetElement.hasOwnProperty(prop)) return `${path} not exist`;
        targetElement = targetElement[prop];
    }
    return targetElement;
}