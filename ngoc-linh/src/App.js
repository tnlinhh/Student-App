import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from '../StudentList';
import './styles.css';

function App() {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleDeleteStudent = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setStudents(newStudents);
  };

  const handleEditStudent = (index) => {
    console.log('Editing student at index:', index);
  };

  return (
    <div>
      <h1>Quản lý sinh viên</h1>
      <StudentForm onSubmit={handleAddStudent} />
      <StudentList students={students} onDelete={handleDeleteStudent} onEdit={handleEditStudent} />
    </div>
  );
}

export default App;