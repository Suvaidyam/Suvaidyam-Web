import axios from "axios";
const baseUrl = `https://learn.suvaidyam.com/api/method/learner.api`

const http = (options) => {
    let ops = {
        url: baseUrl + options.url,
        method: options.method,
        data: options.data,
    };
    if (options.method === 'GET') {
        ops.params = options.data;
    } else {
        ops.data = options.data;
    }
    return axios(ops);
}
export default http;