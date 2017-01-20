export declare type ArgumentListElement = Expression | SpreadElement;
export declare type ArrayExpressionElement = Expression | SpreadElement;
export declare type ArrayPatternElement = AssignmentPattern | BindingIdentifier | BindingPattern | RestElement;
export declare type BindingPattern = ArrayPattern | ObjectPattern;
export declare type BindingIdentifier = Identifier;
export declare type Declaration = ClassDeclaration | ExportDeclaration | FunctionDeclaration | ImportDeclaration | VariableDeclaration;
export declare type ExportDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration;
export declare type Expression = ArrayExpression | ArrowFunctionExpression | AssignmentExpression | BinaryExpression | CallExpression | ClassExpression | ComputedMemberExpression | ConditionalExpression | Identifier | FunctionExpression | Literal | NewExpression | ObjectExpression | RegexLiteral | SequenceExpression | StaticMemberExpression | TaggedTemplateExpression | ThisExpression | UnaryExpression | UpdateExpression | YieldExpression;
export declare type FunctionParameter = AssignmentPattern | BindingIdentifier | BindingPattern;
export declare type ImportDeclarationSpecifier = ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier;
export declare type Statement = BreakStatement | ContinueStatement | DebuggerStatement | DoWhileStatement | EmptyStatement | ExpressionStatement | Directive | ForStatement | ForInStatement | ForOfStatement | FunctionDeclaration | IfStatement | ReturnStatement | SwitchStatement | ThrowStatement | TryStatement | VariableDeclaration | WhileStatement | WithStatement;
export declare type PropertyKey = Identifier | Literal;
export declare type PropertyValue = AssignmentPattern | BindingIdentifier | BindingPattern | FunctionExpression;
export declare type StatementListItem = Declaration | Statement;
export declare class ArrayExpression {
    type: string;
    elements: ArrayExpressionElement[];
    constructor(elements: ArrayExpressionElement[]);
}
export declare class ArrayPattern {
    type: string;
    elements: ArrayPatternElement[];
    constructor(elements: ArrayPatternElement[]);
}
export declare class ArrowFunctionExpression {
    type: string;
    id: Identifier;
    params: FunctionParameter[];
    body: BlockStatement | Expression;
    generator: boolean;
    expression: boolean;
    constructor(params: FunctionParameter[], body: BlockStatement | Expression, expression: boolean);
}
export declare class AssignmentExpression {
    type: string;
    operator: string;
    left: Expression;
    right: Expression;
    constructor(operator: string, left: Expression, right: Expression);
}
export declare class AssignmentPattern {
    type: string;
    left: BindingIdentifier | BindingPattern;
    right: Expression;
    constructor(left: BindingIdentifier | BindingPattern, right: Expression);
}
export declare class BinaryExpression {
    type: string;
    operator: string;
    left: Expression;
    right: Expression;
    constructor(operator: string, left: Expression, right: Expression);
}
export declare class BlockStatement {
    type: string;
    body: Statement[];
    constructor(body: any);
}
export declare class BreakStatement {
    type: string;
    label: Identifier;
    constructor(label: Identifier);
}
export declare class CallExpression {
    type: string;
    callee: Expression;
    arguments: ArgumentListElement[];
    constructor(callee: any, args: any);
}
export declare class CatchClause {
    type: string;
    param: BindingIdentifier | BindingPattern;
    body: BlockStatement;
    constructor(param: BindingIdentifier | BindingPattern, body: BlockStatement);
}
export declare class ClassBody {
    type: string;
    body: Property[];
    constructor(body: Property[]);
}
export declare class ClassDeclaration {
    type: string;
    id: Identifier;
    superClass: Identifier;
    body: ClassBody;
    constructor(id: Identifier, superClass: Identifier, body: ClassBody);
}
export declare class ClassExpression {
    type: string;
    id: Identifier;
    superClass: Identifier;
    body: ClassBody;
    constructor(id: Identifier, superClass: Identifier, body: ClassBody);
}
export declare class ComputedMemberExpression {
    type: string;
    computed: boolean;
    object: Expression;
    property: Expression;
    constructor(object: Expression, property: Expression);
}
export declare class ConditionalExpression {
    type: string;
    test: Expression;
    consequent: Expression;
    alternate: Expression;
    constructor(test: Expression, consequent: Expression, alternate: Expression);
}
export declare class ContinueStatement {
    type: string;
    label: Identifier;
    constructor(label: Identifier);
}
export declare class DebuggerStatement {
    type: string;
    constructor();
}
export declare class Directive {
    type: string;
    expression: Expression;
    directive: string;
    constructor(expression: Expression, directive: string);
}
export declare class DoWhileStatement {
    type: string;
    body: Statement;
    test: Expression;
    constructor(body: Statement, test: Expression);
}
export declare class EmptyStatement {
    type: string;
    constructor();
}
export declare class ExportAllDeclaration {
    type: string;
    source: Literal;
    constructor(source: Literal);
}
export declare class ExportDefaultDeclaration {
    type: string;
    declaration: BindingIdentifier | BindingPattern | ClassDeclaration | Expression | FunctionDeclaration;
    constructor(declaration: BindingIdentifier | BindingPattern | ClassDeclaration | Expression | FunctionDeclaration);
}
export declare class ExportNamedDeclaration {
    type: string;
    declaration: ClassDeclaration | Function | VariableDeclaration;
    specifiers: ExportSpecifier[];
    source: Literal;
    constructor(declaration: ClassDeclaration | Function | VariableDeclaration, specifiers: ExportSpecifier[], source: Literal);
}
export declare class ExportSpecifier {
    type: string;
    exported: Identifier;
    local: Identifier;
    constructor(local: Identifier, exported: Identifier);
}
export declare class ExpressionStatement {
    type: string;
    expression: Expression;
    constructor(expression: Expression);
}
export declare class ForInStatement {
    type: string;
    left: Expression;
    right: Expression;
    body: Statement;
    each: boolean;
    constructor(left: Expression, right: Expression, body: Statement);
}
export declare class ForOfStatement {
    type: string;
    left: Expression;
    right: Expression;
    body: Statement;
    constructor(left: Expression, right: Expression, body: Statement);
}
export declare class ForStatement {
    type: string;
    init: Expression;
    test: Expression;
    update: Expression;
    body: Statement;
    constructor(init: Expression, test: Expression, update: Expression, body: Statement);
}
export declare class FunctionDeclaration {
    type: string;
    id: Identifier;
    params: FunctionParameter[];
    body: BlockStatement;
    generator: boolean;
    expression: boolean;
    constructor(id: Identifier, params: FunctionParameter[], body: BlockStatement, generator: boolean);
}
export declare class FunctionExpression {
    type: string;
    id: Identifier;
    params: FunctionParameter[];
    body: BlockStatement;
    generator: boolean;
    expression: boolean;
    constructor(id: Identifier, params: FunctionParameter[], body: BlockStatement, generator: boolean);
}
export declare class Identifier {
    type: string;
    name: string;
    constructor(name: any);
}
export declare class IfStatement {
    type: string;
    test: Expression;
    consequent: Statement;
    alternate: Statement;
    constructor(test: Expression, consequent: Statement, alternate: Statement);
}
export declare class ImportDeclaration {
    type: string;
    specifiers: ImportDeclarationSpecifier[];
    source: Literal;
    constructor(specifiers: any, source: any);
}
export declare class ImportDefaultSpecifier {
    type: string;
    local: Identifier;
    constructor(local: Identifier);
}
export declare class ImportNamespaceSpecifier {
    type: string;
    local: Identifier;
    constructor(local: Identifier);
}
export declare class ImportSpecifier {
    type: string;
    local: Identifier;
    imported: Identifier;
    constructor(local: Identifier, imported: Identifier);
}
export declare class LabeledStatement {
    type: string;
    label: Identifier;
    body: Statement;
    constructor(label: Identifier, body: Statement);
}
export declare class Literal {
    type: string;
    value: boolean | number | string;
    raw: string;
    constructor(value: boolean | number | string, raw: string);
}
export declare class MetaProperty {
    type: string;
    meta: Identifier;
    property: Identifier;
    constructor(meta: Identifier, property: Identifier);
}
export declare class MethodDefinition {
    type: string;
    key: Expression;
    computed: boolean;
    value: FunctionExpression;
    kind: string;
    static: boolean;
    constructor(key: Expression, computed: boolean, value: FunctionExpression, kind: string, isStatic: boolean);
}
export declare class NewExpression {
    type: string;
    callee: Expression;
    arguments: ArgumentListElement[];
    constructor(callee: Expression, args: ArgumentListElement[]);
}
export declare class ObjectExpression {
    type: string;
    properties: Property[];
    constructor(properties: Property[]);
}
export declare class ObjectPattern {
    type: string;
    properties: Property[];
    constructor(properties: Property[]);
}
export declare class Program {
    type: string;
    body: StatementListItem[];
    sourceType: string;
    constructor(body: StatementListItem[], sourceType: string);
}
export declare class Property {
    type: string;
    key: PropertyKey;
    computed: boolean;
    value: PropertyValue;
    kind: string;
    method: boolean;
    shorthand: boolean;
    constructor(kind: string, key: PropertyKey, computed: boolean, value: PropertyValue, method: boolean, shorthand: boolean);
}
export declare class RegexLiteral {
    type: string;
    value: string;
    raw: string;
    regex: any;
    constructor(value: string, raw: string, regex: any);
}
export declare class RestElement {
    type: string;
    argument: BindingIdentifier | BindingPattern;
    constructor(argument: BindingIdentifier | BindingPattern);
}
export declare class ReturnStatement {
    type: string;
    argument: Expression;
    constructor(argument: Expression);
}
export declare class SequenceExpression {
    type: string;
    expressions: Expression[];
    constructor(expressions: Expression[]);
}
export declare class SpreadElement {
    type: string;
    argument: Expression;
    constructor(argument: Expression);
}
export declare class StaticMemberExpression {
    type: string;
    computed: boolean;
    object: Expression;
    property: Expression;
    constructor(object: Expression, property: Expression);
}
export declare class Super {
    type: string;
    constructor();
}
export declare class SwitchCase {
    type: string;
    test: Expression;
    consequent: Statement[];
    constructor(test: Expression, consequent: Statement[]);
}
export declare class SwitchStatement {
    type: string;
    discriminant: Expression;
    cases: SwitchCase[];
    constructor(discriminant: Expression, cases: SwitchCase[]);
}
export declare class TaggedTemplateExpression {
    type: string;
    tag: Expression;
    quasi: TemplateLiteral;
    constructor(tag: Expression, quasi: TemplateLiteral);
}
export interface TemplateElementValue {
    cooked: string;
    raw: string;
}
export declare class TemplateElement {
    type: string;
    value: TemplateElementValue;
    tail: boolean;
    constructor(value: TemplateElementValue, tail: boolean);
}
export declare class TemplateLiteral {
    type: string;
    quasis: TemplateElement[];
    expressions: Expression[];
    constructor(quasis: TemplateElement[], expressions: Expression[]);
}
export declare class ThisExpression {
    type: string;
    constructor();
}
export declare class ThrowStatement {
    type: string;
    argument: Expression;
    constructor(argument: Expression);
}
export declare class TryStatement {
    type: string;
    block: BlockStatement;
    handler: CatchClause;
    finalizer: BlockStatement;
    constructor(block: BlockStatement, handler: CatchClause, finalizer: BlockStatement);
}
export declare class UnaryExpression {
    type: string;
    operator: string;
    argument: Expression;
    prefix: boolean;
    constructor(operator: any, argument: any);
}
export declare class UpdateExpression {
    type: string;
    operator: string;
    argument: Expression;
    prefix: boolean;
    constructor(operator: any, argument: any, prefix: any);
}
export declare class VariableDeclaration {
    type: string;
    declarations: VariableDeclarator[];
    kind: string;
    constructor(declarations: VariableDeclarator[], kind: string);
}
export declare class VariableDeclarator {
    type: string;
    id: BindingIdentifier | BindingPattern;
    init: Expression;
    constructor(id: BindingIdentifier | BindingPattern, init: Expression);
}
export declare class WhileStatement {
    type: string;
    test: Expression;
    body: Statement;
    constructor(test: Expression, body: Statement);
}
export declare class WithStatement {
    type: string;
    object: Expression;
    body: Statement;
    constructor(object: Expression, body: Statement);
}
export declare class YieldExpression {
    type: string;
    argument: Expression;
    delegate: boolean;
    constructor(argument: Expression, delegate: boolean);
}
