import stRequest from "./request/request.ts";


const STRequest = new stRequest({
    baseURL: 'https://api.openai.com/v1',
});

export default STRequest
