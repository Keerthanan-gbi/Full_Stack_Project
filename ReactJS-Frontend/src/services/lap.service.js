import httpClient from "../http.common.js";

const getAll = () => {
    return httpClient.get('/laps');
}

const create = data => {
    return httpClient.post("/laps", data);
}

const get = id => {
    return httpClient.get(`/laps/${id}`);
}

const update = data => {
    return httpClient.put('/laps', data);
}

const remove = id => {
    return httpClient.delete(`/laps/${id}`);
}

export default { getAll, create, get, update, remove };