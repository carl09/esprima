export class CustomError extends Error {
    name: string;
    message: string;
    index: number;
    lineNumber: number;
    column: number;
    description: string;
    constructor(message: string) {
        super(message);
    }
}

export class ErrorHandler {
    errors: Error[];
    tolerant: boolean;

    constructor() {
        this.errors = [];
        this.tolerant = false;
    };

    recordError(error: Error): void {
        this.errors.push(error);
    };

    tolerate(error): void {
        if (this.tolerant) {
            this.recordError(error);
        } else {
            throw error;
        }
    };

    constructError(msg: string, column: number): CustomError {
        let error = new CustomError(msg);
        try {
            throw error;
        } catch (base) {
            /* istanbul ignore else */
            if (Object.create && Object.defineProperty) {
                error = Object.create(base);
                Object.defineProperty(error, 'column', { value: column });
            }
        } finally {
            return error;
        }
    };

    createError(index: number, line: number, col: number, description: string): CustomError {
        const msg = 'Line ' + line + ': ' + description;
        const error = this.constructError(msg, col);
        error.index = index;
        error.lineNumber = line;
        error.description = description;
        return error;
    };

    throwError(index: number, line: number, col: number, description: string) {
        throw this.createError(index, line, col, description);
    };

    tolerateError(index: number, line: number, col: number, description: string) {
        const error = this.createError(index, line, col, description);
        if (this.tolerant) {
            this.recordError(error);
        } else {
            throw error;
        }
    };

}
