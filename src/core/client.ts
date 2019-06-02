import axios from 'axios';
//import { User } from './model';

const domain = 'http://localhost:6666'

const client = axios.create({
    baseURL: domain,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export async function login(username: string, password: string) {

    const response = await client.post('/login', {
        username: username,
        password: password
    });

    return response.status === 200 ? response.data : null;
}

export async function getUserById(id: number) {

    const response = await client.get('/users/' + id);

    return response.status === 200 ? response.data : null;
}
