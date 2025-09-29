import axios from "axios";
import qs from "qs";
const SERVER_URL = import.meta.env.VITE_API_URL;

//Add a new student
export async function addStudents(
  name,
  stClass,
  school,
  feesamount,
  status,
  notes,
  contact
) {
  try {
    const data = qs.stringify({
      name,
      stClass,
      school,
      feesamount,
      status,
      notes,
      contact
    });
    const response = await axios.post(`${SERVER_URL}/students/create`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

//Get all students
export async function getAllStudents() {
  try {
    const response = await axios.get(`${SERVER_URL}/students`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

//get a particular students to
export async function getStudentsById(id) {
  try {
    const response = await axios.get(`${SERVER_URL}/students/${id}`,{
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

//Update a student payment status
export async function updateStudent(id, status, notes) {
  try {
    const data = qs.stringify({ status, notes });
    const response = await axios.put(
      `${SERVER_URL}/students/update/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

//Delete a student
export async function deleteStudent(id) {
  try {
    const response = await axios.delete(`${SERVER_URL}/students/delete/${id}`,{withCredentials: true,});
    return response;
  } catch (error) {
    throw error;
  }
}

//Register a new user
export async function registerUser(name, email, password) {
  try {
    const data = qs.stringify({ name, email, password });
    const response = await axios.post(`${SERVER_URL}/user/register`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

//Login user
export async function loginUser(email, password) {
  try {
    const data = qs.stringify({ email, password });
    const response = await axios.post(`${SERVER_URL}/user/login`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

//Logout user
export async function logoutUser() {
  try {
    const response = await axios.post(`${SERVER_URL}/user/logout`, null, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

//User Profile
export async function userProfile() {
  try {
    const response = await axios.get(`${SERVER_URL}/user/profile`,{
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
