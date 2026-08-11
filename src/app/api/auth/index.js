import {API_BASE_URL} from '../../config.js';



export async function  login(credentials) {
    const response = await fetch(`${API_BASE_URL}/login`,
        {
            method: `post`,
            headers: {'content-type': 'application/json'},
            body:JSON.stringify(credentials)
        }
    );
    if(!response.ok){
        throw new Error('login failed');
    }
    return response.json();
}
export async function  register(userData) {
    const response = await fetch(`${API_BASE_URL}/register`,
        {
            method: `post`,
            headers: {'content-type': 'application/json'},
            body:JSON.stringify(userData)
        }
    );
    if(!response.ok){
        throw new Error('register failed');
    }
    return response.json();
}