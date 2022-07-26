import axios from "axios";

export default post = (url, data={}) => {
    return new Promise( (resolve, reject) => {
        axios.post(url, data, {
            baseURL: '',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( (response) => {
            resolve(response.data)//返回的数据中
        }, () => {

        })
    })
}