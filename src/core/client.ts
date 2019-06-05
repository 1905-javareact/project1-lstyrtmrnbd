import axios from 'axios';
import { User } from './model';

const domain = 'http://localhost:6666'

const client = axios.create({
    baseURL: domain,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

async function makeRequest(request: any) {

    let response;

    try {

        response = await request();

        console.log(response); // test output

        if (response.status === 200) {

            return response;
        } else {

            throw (response.status);
        }
    } catch (err) {

        console.log(err);
        console.log(response);
    }
}

export async function login(name: string, pass: string) {

    const res = await makeRequest(() => {
        return client.post('/login', {
            username: name,
            password: pass
        });
    });

    return res.data;
}

export async function getUserById(id: number) {

    const res = await makeRequest(() => {
        return client.get('/users/' + id);
    });

    return res.data;
}

export async function updateUser(newUser) {

    const res = await makeRequest(() => {
        return client.patch('/users', newUser)
    });

    return res.data;
}

export async function getReimbursementByStatus(status: number) {

    const res = await makeRequest(() => {
        return client.get('/reimbursements/status/' + status);
    });

    return res.data;
}

export async function getReimbursementByUser(userId: number) {

    const res = await makeRequest(() => {
        return client.get('/reimbursements/author/userId/' + userId);
    });

    return res.data;
}

export async function updateReimbursement(newReim) {

    const res = await makeRequest(() => {
        return client.patch('/reimbursements', newReim);
    });

    return res.data;
}

export async function submitReimbursement(newReim) {

    const res = await makeRequest(() => {
        return client.post('/reimbursements', newReim);
    });

    return res.data;
}
