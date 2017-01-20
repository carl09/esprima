import { Parser } from './parser';
import * as Node from './nodes';
import * as JSXNode from './jsx-nodes';
export interface MetaJSXNode {
    index: number;
    line: number;
    column: number;
}
export interface MetaJSXElement {
    node: MetaJSXNode;
    opening: JSXNode.JSXOpeningElement;
    closing: JSXNode.JSXClosingElement;
    children: JSXNode.JSXChild[];
}
export declare enum JSXToken {
    Identifier = 100,
    Text = 101,
}
export declare class JSXParser extends Parser {
    constructor(code: string, options: any, delegate: any);
    parsePrimaryExpression(): Node.Expression | JSXNode.JSXElement;
    startJSX(): void;
    finishJSX(): void;
    reenterJSX(): void;
    createJSXNode(): MetaJSXNode;
    createJSXChildNode(): MetaJSXNode;
    scanXHTMLEntity(quote: string): string;
    lexJSX(): any;
    nextJSXToken(): any;
    nextJSXText(): {
        type: JSXToken;
        value: string;
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
    peekJSXToken(): any;
    expectJSX(value: any): void;
    matchJSX(value: any): boolean;
    parseJSXIdentifier(): JSXNode.JSXIdentifier;
    parseJSXElementName(): JSXNode.JSXElementName;
    parseJSXAttributeName(): JSXNode.JSXAttributeName;
    parseJSXStringLiteralAttribute(): Node.Literal;
    parseJSXExpressionAttribute(): JSXNode.JSXExpressionContainer;
    parseJSXAttributeValue(): JSXNode.JSXAttributeValue;
    parseJSXNameValueAttribute(): JSXNode.JSXAttribute;
    parseJSXSpreadAttribute(): JSXNode.JSXSpreadAttribute;
    parseJSXAttributes(): JSXNode.JSXElementAttribute[];
    parseJSXOpeningElement(): JSXNode.JSXOpeningElement;
    parseJSXBoundaryElement(): JSXNode.JSXOpeningElement | JSXNode.JSXClosingElement;
    parseJSXEmptyExpression(): JSXNode.JSXEmptyExpression;
    parseJSXExpressionContainer(): JSXNode.JSXExpressionContainer;
    parseJSXChildren(): JSXNode.JSXChild[];
    parseComplexJSXElement(el: MetaJSXElement): MetaJSXElement;
    parseJSXElement(): JSXNode.JSXElement;
    parseJSXRoot(): JSXNode.JSXElement;
}
