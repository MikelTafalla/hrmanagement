import axios from "axios";


export default {
    findById: function (id) {
        return axios.get(`/api/changeform/${id}`);
    },
    update: function (id, formData) {
        return axios.put(`/api/changeform/${id}`, formData);
    },
    create: function (formData) {
        return axios.post("/api/newchangeform", formData)
    },
    createExisting: function (form) {
        return axios.post("/api/existingemployeenewform", form)
    },
    findAll: function () {
        return axios.get("/api/employeedirectory")
    },
    findReport: function (id) {
        return axios.get(`/api/formlistpage/${id}`)
    }
};
