import axios from "axios";


export default {
    findById: function (id) {
        return axios.get(`/changeform/${id}`);
    },
    update: function (id) {
        return axios.put(`/changeform/${id}`);
    }
};
