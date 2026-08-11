import { API_BASE_URL } from '../../config';

export async function getUsers() {
    const response = await fetch(`${API_BASE_URL}/getAllUsers`);
    if (!response.ok) {
        throw new Error('failed to fetch users');
    }
    return response.json(); 
}

export async function getUser(id) {
    const response = await fetch(`${API_BASE_URL}/getUsers/${id}`);
    if (!response.ok) {
        throw new Error(`failed to fetch user ${id}`);
    }
    return response.json(); 
}