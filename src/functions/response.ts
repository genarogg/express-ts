type ResponseType = "success" | "error";
interface ResponsePayload {
    message?: string;
    type?: ResponseType;
    token?: string;
    data?: any;
    [key: string]: any;
}

const createResponse = (type: ResponseType, message?: string, token?: string, data?: any, additionalParams?: object): ResponsePayload => {
    const payload: ResponsePayload = { type };

    if (message) {
        payload.message = message;
    }

    if (token) {
        payload.token = token;
    }

    if (data) {
        payload.data = data;
    }

    if (additionalParams) {
        Object.assign(payload, additionalParams);
    }

    return payload;
};

// Funciones de ayuda
const successResponse = ({ message, token, data, additionalParams }: ResponsePayload): ResponsePayload => {
    return createResponse("success", message, token, data, additionalParams);
};

const errorResponse = ({ message, token, data, additionalParams }: ResponsePayload): ResponsePayload => {
    return createResponse("error", message, token, data, additionalParams);
};

export { createResponse, successResponse, errorResponse };