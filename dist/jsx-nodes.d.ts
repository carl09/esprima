import * as Node from './nodes';
export declare type JSXAttributeName = JSXIdentifier | JSXNamespacedName;
export declare type JSXAttributeValue = Node.Literal | JSXElement | JSXSpreadAttribute | JSXExpressionContainer;
export declare type JSXChild = JSXElement | JSXExpressionContainer | JSXText;
export declare type JSXElementAttribute = JSXAttribute | JSXSpreadAttribute;
export declare type JSXElementName = JSXIdentifier | JSXNamespacedName | JSXMemberExpression;
export declare class JSXClosingElement {
    type: string;
    name: JSXElementName;
    constructor(name: JSXElementName);
}
export declare class JSXElement {
    type: string;
    openingElement: JSXOpeningElement;
    children: JSXChild[];
    closingElement: JSXClosingElement;
    constructor(openingElement: JSXOpeningElement, children: JSXChild[], closingElement: JSXClosingElement);
}
export declare class JSXEmptyExpression {
    type: string;
    constructor();
}
export declare class JSXExpressionContainer {
    type: string;
    expression: Node.Expression | JSXEmptyExpression;
    constructor(expression: Node.Expression | JSXEmptyExpression);
}
export declare class JSXIdentifier {
    type: string;
    name: string;
    constructor(name: string);
}
export declare class JSXMemberExpression {
    type: string;
    object: JSXMemberExpression | JSXIdentifier;
    property: JSXIdentifier;
    constructor(object: JSXMemberExpression | JSXIdentifier, property: JSXIdentifier);
}
export declare class JSXAttribute {
    type: string;
    name: JSXAttributeName;
    value: JSXAttributeValue;
    constructor(name: JSXAttributeName, value: JSXAttributeValue);
}
export declare class JSXNamespacedName {
    type: string;
    namespace: JSXIdentifier;
    name: JSXIdentifier;
    constructor(namespace: JSXIdentifier, name: JSXIdentifier);
}
export declare class JSXOpeningElement {
    type: string;
    name: JSXElementName;
    selfClosing: boolean;
    attributes: JSXElementAttribute[];
    constructor(name: JSXElementName, selfClosing: boolean, attributes: JSXElementAttribute[]);
}
export declare class JSXSpreadAttribute {
    type: string;
    argument: Node.Expression;
    constructor(argument: Node.Expression);
}
export declare class JSXText {
    type: string;
    value: string;
    raw: string;
    constructor(value: string, raw: string);
}
