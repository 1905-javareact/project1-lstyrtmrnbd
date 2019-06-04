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

async function makeRequest(request) {

    let response;

    try {

        response = await request();

        if (response.status === 200) {

            return response.data;
        } else {

            throw (response.status);
        }
    } catch (err) {

        console.log(err);
        return response.status; // undefined if response fails to complete
    }
}

export async function login(name: string, pass: string): Promise<User> {

    const data = await makeRequest(() => {
        client.post('/login', {
            username: name,
            password: pass
        })
    });

    const { userId, username, password, firstName, lastName, email, role } = data;

    return new User(userId, username, password, firstName, lastName, email, role);
}

export async function getUserById(id: number) {

    const response = await client.get('/users/' + id);

    return response.status === 200 ? response.data : null;
}

// doesn't necessarily have to be a User object
export async function updateUser(newUser: User) {

    const response = await client.patch('/users', newUser);

    return response.status === 200 ? response.data : null;
}
