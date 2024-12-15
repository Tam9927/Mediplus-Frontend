// // src/components/Doctor/AddDoctorForm.tsx
// import React, { useState } from 'react';
// import { addDoctor } from '../../services/DoctorService';
// import { useNavigate } from 'react-router-dom';

// const AddDoctorForm: React.FC = () => {
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const [specialization, setSpecialization] = useState<number>(0);
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await addDoctor({ name, contact, specialization });
//       navigate('/doctors');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//       <input type="text" placeholder="Specialty" value={contact} onChange={(e) => setContact(e.target.value)} required />
//       <input type="number" placeholder="Experience" value={specialization} onChange={(e) => setSpecialization(+e.target.value)} required />
//       <button type="submit">Add Doctor</button>
//     </form>
//   );
// };

// export default AddDoctorForm;


import React from 'react';  

const AddDoctorForm: React.FC = () => {
  return <h1>Add Doctor Form</h1>;
};

export default AddDoctorForm;
