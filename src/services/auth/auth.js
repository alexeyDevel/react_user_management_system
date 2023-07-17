import api from "../axios-config";

export async function login(credentials){
    return await api.post('/login', credentials);
};

export async function register(email, password){
    let res;
    try {
        res = await api.post('/register', {
            email: email,
            password: password
        });  
        return  res.data;    
    } catch (error) {
        return error;
    }
};