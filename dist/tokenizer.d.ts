import { Scanner } from './scanner';
import { ErrorHandler } from './error-handler';
export declare class Reader {
    values: string[];
    curly: number;
    paren: number;
    constructor();
    beforeFunctionExpression(t: string): boolean;
    isRegexStart(): boolean;
    push(token: any): void;
}
export declare class Tokenizer {
    errorHandler: ErrorHandler;
    scanner: Scanner;
    trackRange: boolean;
    trackLoc: boolean;
    buffer: any[];
    reader: Reader;
    constructor(code: string, config: any);
    errors(): Error[];
    getNextToken(): any;
}
