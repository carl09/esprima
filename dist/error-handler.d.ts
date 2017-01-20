export declare class CustomError extends Error {
    name: string;
    message: string;
    index: number;
    lineNumber: number;
    column: number;
    description: string;
    constructor(message: string);
}
export declare class ErrorHandler {
    errors: Error[];
    tolerant: boolean;
    constructor();
    recordError(error: Error): void;
    tolerate(error: any): void;
    constructError(msg: string, column: number): CustomError;
    createError(index: number, line: number, col: number, description: string): CustomError;
    throwError(index: number, line: number, col: number, description: string): void;
    tolerateError(index: number, line: number, col: number, description: string): void;
}
