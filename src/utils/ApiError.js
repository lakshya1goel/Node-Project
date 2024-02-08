class ApiError extends Error {
    constructor(
        statusCode,
        msg = "Something went wrong!",
        errors = [],
        stack = ""
    ) {
        super(msg);
        this.statusCode = statusCode;
        this.message = msg;
        this.errors = errors;
        this.stack = stack;

        if(stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError}