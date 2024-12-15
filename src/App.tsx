// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorPage from '../src/pages/DoctorPage';
import AddDoctorForm from './components/Doctor/AddDoctorForm';
import EditDoctorForm from './components/Doctor/EditDoctorForm'; // Assuming you have an edit form

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/doctors" element={<DoctorPage />} />
        <Route path="/add-doctor" element={<AddDoctorForm />} />
        <Route path="/edit-doctor/:id" element={<EditDoctorForm />} /> {/* For editing doctor */}
      </Routes>
    </Router>
  );
};

export default App;
