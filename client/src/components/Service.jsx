import axios from 'axios';
import qs from 'qs';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

//Add a new student
export async function addStudents(name, stClass, school, feesamount, status, notes) {
    try {
        const data = qs.stringify({name, stClass, school, feesamount, status, notes});
        const response = await axios.post(`${SERVER_URL}/students/create`, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}

//Get all students
export async function getAllStudents() {
    try {
        const response = await axios.get(`${SERVER_URL}/students`);
        return response;
    } catch (error) {
        throw error;
    }
}

//Update a student payment status
export async function updateStudent(id, status, notes) {
    try {
        const data = qs.stringify({status,notes});
        const response = await axios.put(`${SERVER_URL}/students/update/${id}`, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}

//Delete a student
export async function deleteStudent(id) {
    try {
        const response = await axios.delete(`${SERVER_URL}/students/delete/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
}