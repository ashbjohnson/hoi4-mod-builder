import IModElement from "./IModElement";

class AbstractAtomicModElement extends IModElement {
    constructor (key, value) {
        super();
        this.fileRepresentation = `${key} = ${value}`;
    }

    getFileRepresentation() {
        return this.fileRepresentation;
    }
}

export const getAbstractAtomicModElement = (key) => class GenericAtomicModElement extends AbstractAtomicModElement {
    [key];

    constructor (value) {
        super(key, value);
        this[key] = value;
    }
}

export default AbstractAtomicModElement;
