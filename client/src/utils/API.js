import axios from "axios";

export default {
    findById: function (id) {
        return axios.get(`/api/employeechangeForm/${id}`);
    },
    update: function (id, formData) {
        return axios.put(`/api/employeechangeForm/${id}`, formData);
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
    },
    register: function (info) {
        return axios.post(`/api/register`, info)
    },
    login: function (data) {
        return axios.post(`/api`, data)
    }
};
