import axios from "axios";
export default function (baseUrl = "http://127.0.0.1:8000/api"){
    return axios.create({
        baseURL:baseUrl
    });
}