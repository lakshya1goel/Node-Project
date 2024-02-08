class ApiResponse {
    constructor(statusCode, msg = "SUCCESS!", data) {
        this.statusCode = statusCode;
        this.data = data;
        this.msg = msg;
        this.success = statusCode < 400;
    }
}

export {ApiResponse};