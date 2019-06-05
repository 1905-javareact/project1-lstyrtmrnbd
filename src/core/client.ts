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
        })
    });

    const { userId, username, password,
        firstName, lastName, email, role } = res.data;

    return new User(userId, username, password, firstName, lastName, email, role);
}

export async function getUserById(id: number) {

    const res = await makeRequest(() => {
        return client.get('/users/' + id)
    });

    const { userId, username, password,
        firstName, lastName, email, role } = res.data;

    return new User(userId, username, password, firstName, lastName, email, role);
}

// doesn't necessarily have to be a User object
export async function updateUser(newUser: User) {

    const response = await client.patch('/users', newUser);

    return response.status === 200 ? response.data : null;
}

export async function getReimbursementByStatus(status: number) {

    const res = await makeRequest(() => {
        return client.get('/reimbursements/status/' + status);
    });

    return res.data;
}
