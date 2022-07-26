import axios from "axios";

export default post = (url, data={}) => {
    return new Promise( (resolve, reject) => {
        axios.post(url, data)
    })
}