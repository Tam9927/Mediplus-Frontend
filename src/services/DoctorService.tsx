import axios from 'axios';
import { Doctor } from '../types';
import { API_BASE_URL } from '../utils/api'; // Import the base URL  

export const getDoctors = async (): Promise<Doctor[]> => {
  const response = await axios.get(`${API_BASE_URL}/doctors`);
  return response.data;
};

export const getDoctorById = async (id: number): Promise<Doctor> => {
  const response = await axios.get(`${API_BASE_URL}/doctors/${id}`);
  return response.data;
};

export const addDoctor = async (doctor: Omit<Doctor, 'id'>): Promise<Doctor> => {
  const response = await axios.post(`${API_BASE_URL}/doctors`, doctor);
  return response.data;
};

export const updateDoctor = async (id: number, doctor: Omit<Doctor, 'id'>): Promise<Doctor> => {
  const response = await axios.put(`${API_BASE_URL}/doctors/${id}`, doctor);
  return response.data;
};

export const deleteDoctor = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/doctors/${id}`);
};
