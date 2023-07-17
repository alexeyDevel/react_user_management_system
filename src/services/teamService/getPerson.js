import api from "../axios-config";

export async function getPerson(id){
    return await api.get(`/api/users/${id}`);
};