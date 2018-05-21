import axios from 'axios';

exports.instanceAxios = axios.create({
    baseURL: 'localhost:5555'
})


exports.sendRequest (method, endpoint, data, headers) {
    data = data || {}
    headers = headers || {}
    return new Promise((resolve, reject) => {
        axios({
            url: endpoint,
            method: method,
            data: data,
            headers: headers
        }).then((res) => {
            resolve({
                hasError: false,
                data: res.data
            })
        }).catch((err) => {
            resolve({
                hasError: true,
                data: err.response
            })
        })
    })
};
