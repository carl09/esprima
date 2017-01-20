import { Token } from './token';
import { ErrorHandler } from './error-handler';
export interface Comment {
    multiLine: boolean;
    slice: number[];
    range: number[];
    loc: any;
}
export declare class Scanner {
    source: string;
    errorHandler: ErrorHandler;
    trackComment: boolean;
    length: number;
    index: number;
    lineNumber: number;
    lineStart: number;
    curlyStack: string[];
    constructor(code: string, handler: ErrorHandler);
    eof(): boolean;
    throwUnexpectedToken(message?: string): void;
    tolerateUnexpectedToken(): void;
    skipSingleLineComment(offset: number): Comment[];
    skipMultiLineComment(): Comment[];
    scanComments(): any;
    isFutureReservedWord(id: string): boolean;
    isStrictModeReservedWord(id: string): boolean;
    isRestrictedWord(id: string): boolean;
    isKeyword(id: string): boolean;
    codePointAt(i: number): number;
    scanHexEscape(prefix: string): string;
    scanUnicodeCodePointEscape(): string;
    getIdentifier(): string;
    getComplexIdentifier(): string;
    octalToDecimal(ch: string): {
        code: number;
        octal: boolean;
    };
    scanIdentifier(): {
        type: Token;
        value: string;
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
    scanPunctuator(): {
        type: Token;
        value: string;
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
    scanHexLiteral(start: number): {
        type: Token;
        value: number;
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
    scanBinaryLiteral(start: number): {
        type: Token;
        value: number;
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
    scanOctalLiteral(prefix: string, start: number): {
        type: Token;
        value: number;
        octal: boolean;
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
    isImplicitOctalLiteral(): boolean;
    scanNumericLiteral(): {
        type: Token;
        value: number;
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
    scanStringLiteral(): {
        type: Token;
        value: string;
        octal: boolean;
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
    scanTemplate(): {
        type: Token;
        value: {
            cooked: string;
            raw: string;
        };
        head: boolean;
        tail: boolean;
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
    testRegExp(pattern: string, flags: string): RegExp;
    scanRegExpBody(): {
        value: string;
        literal: string;
    };
    scanRegExpFlags(): {
        value: string;
        literal: string;
    };
    scanRegExp(): {
        type: Token;
        value: RegExp;
        literal: string;
        regex: {
            pattern: string;
            flags: string;
        };
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
    lex(): {
        type: Token;
        lineNumber: number;
        lineStart: number;
        start: number;
        end: number;
    };
}
