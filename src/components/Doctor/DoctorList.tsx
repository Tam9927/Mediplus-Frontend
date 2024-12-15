// src/components/Doctor/DoctorList.tsx
import React, { useEffect, useState } from 'react';
import { Doctor } from '../../types';
import { getDoctors, deleteDoctor } from '../../services/DoctorService';
import { Link } from 'react-router-dom';

const DoctorList: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      try {
        await deleteDoctor(id);
        setDoctors(doctors.filter((doc) => doc.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Doctors</h1>
      <Link to="/add-doctor" className="btn btn-primary">Add New Doctor</Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.experience}</td>
              <td>
                <Link to={`/edit-doctor/${doctor.id}`} className="btn btn-warning btn-sm">Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(doctor.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
