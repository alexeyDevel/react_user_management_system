import api from "../axios-config";

export async function getTeamList(){
    return await api.get('/api/users');
};