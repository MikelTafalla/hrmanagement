import axios from "axios";


export default {
    findById: function (id) {
        return axios.get(`/changeform/${id}`);
    },
    update: function (id, formData) {
        return axios.put(`/changeform/${id}`, formData);
    },
    create: function (formData) {
        return axios.post("/newform", formData)
    }
};
