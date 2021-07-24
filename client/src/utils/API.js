
import axios from "axios";

const API = {
    getVillains: function (query) {
        return axios.get("/api/villains", { params: { q: query }});
    },

    getVillain: function (id) {
        return axios.get("/api/villains/" + id);
    },

    login: function (body) {
        return axios.post("/api/users/login", { data: body });
    },

    signUp: function (body) {
        console.log("body showing")
        return axios.post("/api/users", { data: body });
    },

    logout: function () {
        return axios.post("/api/users/logout");
    },


    // getUserVillains: function () {
    //     return axios.get("/api/villains");
    // },

};

export default API;
