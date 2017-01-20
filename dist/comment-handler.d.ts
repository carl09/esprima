export interface Comment {
    type: string;
    value: string;
    range?: any;
    loc?: any;
}
export interface Entry {
    comment: Comment;
    start: number;
}
export interface NodeInfo {
    node: any;
    start: number;
}
export declare class CommentHandler {
    attach: boolean;
    comments: Comment[];
    stack: NodeInfo[];
    leading: Entry[];
    trailing: Entry[];
    constructor();
    insertInnerComments(node: any, metadata: any): void;
    findTrailingComments(node: any, metadata: any): any[];
    findLeadingComments(node: any, metadata: any): any[];
    visitNode(node: any, metadata: any): void;
    visitComment(node: any, metadata: any): void;
    visit(node: any, metadata: any): void;
}
