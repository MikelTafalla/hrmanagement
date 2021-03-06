import axios from "axios";

export default {
    findById: function (id) {
        return axios.get(`/api/employeechangeForm/${id}`)
    },
    update: function (id, formData) {
        return axios.put(`/api/employeechangeForm/${id}`, formData)
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
    },
    findRole: function (role) {
        return axios.get(`/api/employeedirectory/${role}`)
    },
    createTerminationForm: function (form) {
        return axios.post(`/api/separationform`, form)
    },
    findTermination: function (id) {
        return axios.get(`/api/terminationlistpage/${id}`)
    },
    updateTerminationForm: function (id, form) {
        return axios.put(`/api/existingseparationform/${id}`, form)
    },
    findterminatedemployee: function (id) {
        return axios.get(`/api/existingseparationform/${id}`)
    },
    findNewHire: function (id) {
        return axios.get(`/api/newhirecontinue/${id}`)
    },
    findHiringReport: function (id) {
        return axios.get(`/api/newhirelistpage/${id}`)
    },
    postNewHire: function (form) {
        return axios.post(`/api/newhireform/`, form)
    },
    updateNewHire: function (id, form) {
        return axios.put(`/api/newhirecontinue/${id}`, form)
    }
};
