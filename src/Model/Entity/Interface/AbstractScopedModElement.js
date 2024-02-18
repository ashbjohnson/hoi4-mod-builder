import BlankLine from "../BlankLine";
import IModElement from "./IModElement";

class AbstractScopedModElement extends IModElement {
    children;
    scope;

    constructor (scope, children) {
        super();
        this.scope = scope;
        this.children = children;
    }

    getFileRepresentation(depth = 1) {
        let fileRepresentation = this.scope + ' = {\n';
        this.children.forEach((child) => {
            if (child instanceof BlankLine) {
                fileRepresentation += '\n';
                return;
            }
            fileRepresentation += ('    '.repeat(depth)) + (child instanceof AbstractScopedModElement ? child.getFileRepresentation(depth + 1) : child.fileRepresentation) + '\n';
        });
        fileRepresentation += '    '.repeat(depth - 1) + '}';
        return fileRepresentation;
    }
}

export const getAbstractScopedModElement = (key) => class GenericScopedModElement extends AbstractScopedModElement {
    constructor (children) {
        super(key, children);
    }
}
