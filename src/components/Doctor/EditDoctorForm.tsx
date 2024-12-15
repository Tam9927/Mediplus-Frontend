// // src/components/Doctor/EditDoctorForm.tsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getDoctorById, updateDoctor } from '../../services/DoctorService';
// import { Doctor } from '../../types';

// const EditDoctorForm: React.FC = () => {
//   const { id } = useParams(); // Get the doctor ID from the URL
//   const [doctor, setDoctor] = useState<Doctor | null>(null);
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const [specialization, setSpecialization] = useState<number>(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDoctor = async () => {
//       if (id) {
//         try {
//           const doctorData = await getDoctorById(Number(id)); // Fetch the doctor by ID
//           setDoctor(doctorData);
//           setName(doctorData.name);
//           setContact(doctorData.contact);
//           setSpecialization(doctorData.specialization);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     };

//     fetchDoctor();
//   }, [id]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (doctor && id) {
//         await updateDoctor(Number(id), { name, contact, specialization });
//         navigate('/doctors'); // Redirect to the list after updating
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!doctor) return <p>Loading...</p>;

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//       <input type="text" placeholder="Specialty" value={contact} onChange={(e) => setContact(e.target.value)} required />
//       <input type="number" placeholder="Experience" value={specialization} onChange={(e) => setSpecialization(+e.target.value)} required />
//       <button type="submit">Update Doctor</button>
//     </form>
//   );
// };

// export default EditDoctorForm;


import React from 'react';

const EditDoctorForm: React.FC = () => {
  return <h1>Edit Doctor Form</h1>;
};

export default EditDoctorForm;
