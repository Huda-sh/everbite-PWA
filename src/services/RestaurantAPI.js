import API from "@/services/API.js";

export default {
    get(){
        return API().get('/restaurant');
    },
}